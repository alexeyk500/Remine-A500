import React, { useEffect, useState } from "react";
import classes from "./DateRangeSelector.module.css";
import btnBack from "./../../images/btnBack.svg";
import btnForward from "./../../images/btnForward.svg";
import {ExpandOneDayFrom, ExpandOneDayTo, getDataStrForDaysRange} from "../../utils/functions";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { selectorDaysRange, setDaysRange } from "../../store/timeSheetSlice";

type PropsType = {
  scrollAnchorStart: React.MutableRefObject<HTMLDivElement | null>
  scrollAnchorEnd: React.MutableRefObject<HTMLDivElement | null>
}

const DateRangeSelector: React.FC <PropsType> = ({scrollAnchorStart, scrollAnchorEnd}) => {
  const dispatch = useAppDispatch();
  const dayRange = useAppSelector(selectorDaysRange);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  useEffect(() => {
    if (dayRange) {
      setFrom(getDataStrForDaysRange(dayRange.from));
      setTo(getDataStrForDaysRange(dayRange.to));
    }
  }, [dayRange]);

  const btnForwardClick = () => {
    if (dayRange) {
      const newTo = ExpandOneDayTo(dayRange.to);
      dispatch(setDaysRange({ from: dayRange.from, to: newTo }));
      scrollAnchorEnd && scrollAnchorEnd.current && scrollAnchorEnd.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const btnBackwardClick = () => {
    if (dayRange) {
      const newFrom = ExpandOneDayFrom(dayRange.from);
      dispatch(setDaysRange({ from: newFrom, to: dayRange.to }));
      scrollAnchorStart && scrollAnchorStart.current && scrollAnchorStart.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={classes.container}>
      <button className={classes.btnBack} onClick={btnBackwardClick}>
        <img src={btnBack} alt="btnBack ico" />
      </button>
      <div className={classes.centerContainer}>
        <div className={classes.fromSelector}>
          <div className={classes.title}>{from}</div>
        </div>
        <div className={classes.splitter}>—</div>
        <div className={classes.toSelector}>
          <div className={classes.title}>{to}</div>
        </div>
      </div>
      <button className={classes.btnForward} onClick={btnForwardClick}>
        <img src={btnForward} alt="btnForward ico" />
      </button>
    </div>
  );
};

export default DateRangeSelector;
