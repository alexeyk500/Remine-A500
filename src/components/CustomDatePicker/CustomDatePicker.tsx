import React, { forwardRef, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import ru from "date-fns/locale/ru";
import classes from "./CustomDatePicker.module.css";

import "react-datepicker/dist/react-datepicker.css";
import { dateToStrDate, getDataStrForDaysRange } from "../../utils/functions";
import btnBack from "../../images/btnBack.svg";
import btnForward from "../../images/btnForward.svg";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { selectorDaysRange, setDaysRange } from "../../store/timeSheetSlice";

type PropsType = {
  scrollAnchorStart: React.MutableRefObject<HTMLDivElement | null>;
  scrollAnchorEnd: React.MutableRefObject<HTMLDivElement | null>;
};

const CustomDatePicker: React.FC<PropsType> = ({ scrollAnchorStart, scrollAnchorEnd }) => {
  const dispatch = useAppDispatch();
  const dayRange = useAppSelector(selectorDaysRange);

  const [startDate, setStartDate] = useState<Date | undefined>(new Date());
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);

  useEffect(() => {
    if (dayRange) {
      setStartDate(new Date(dayRange.from));
      setEndDate(new Date(dayRange.to));
    }
  }, [dayRange]);

  const onChange = (dates: [start: Date, end: Date]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    if (end) {
      dispatch(setDaysRange({ from: dateToStrDate(start), to: dateToStrDate(end) }));
    }
  };

  const getFormattedValue = (value: string) => {
    const strDates = value.split("-");
    const formattedStrDate = strDates.map((curStrDate) => {
      if (curStrDate.trim()) {
        return getDataStrForDaysRange(curStrDate.trim());
      } else {
        return "не задано";
      }
    });
    return `${formattedStrDate[0]} - ${formattedStrDate[1]}`;
  };

  const btnForwardClick = () => {
    if (dayRange) {
      scrollAnchorEnd && scrollAnchorEnd.current && scrollAnchorEnd.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const btnBackwardClick = () => {
    if (dayRange) {
      scrollAnchorStart &&
        scrollAnchorStart.current &&
        scrollAnchorStart.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const ExampleCustomInput = forwardRef(
    (
      { value, onClick }: { value?: string; onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined },
      ref: React.LegacyRef<HTMLButtonElement> | undefined
    ) => (
      <div className={classes.container}>
        <button className={classes.btnBack} onClick={btnBackwardClick}>
          <img src={btnBack} alt="btnBack ico" />
        </button>
        <button className={classes.btnTitle} onClick={onClick} ref={ref}>
          {value && getFormattedValue(value)}
        </button>
        <button className={classes.btnForward} onClick={btnForwardClick}>
          <img src={btnForward} alt="btnForward ico" />
        </button>
      </div>
    )
  );

  return (
    <DatePicker
      selected={startDate}
      onChange={onChange}
      startDate={startDate}
      endDate={endDate}
      locale={ru}
      customInput={<ExampleCustomInput />}
      dateFormat={"yyyy/MM/dd"}
      selectsRange
    />
  );
};

export default CustomDatePicker;
