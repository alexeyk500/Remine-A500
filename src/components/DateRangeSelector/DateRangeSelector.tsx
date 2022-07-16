import React, { useEffect, useState } from "react";
import classes from "./DateRangeSelector.module.css";
import btnBack from "./../../images/btnBack.svg";
import btnForward from "./../../images/btnForward.svg";
import { getDataStrForDaysRange } from "../../utils/functions";
import { useAppSelector } from "../../store/hooks";
import { selectorDaysRange } from "../../store/timeSheetSlice";

const DateRangeSelector: React.FC = () => {
  const dayRange = useAppSelector(selectorDaysRange);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  useEffect(() => {
    if (dayRange) {
      setFrom(getDataStrForDaysRange(dayRange.from));
      setTo(getDataStrForDaysRange(dayRange.to));
    }
  }, [dayRange]);

  return (
    <div className={classes.container}>
      <button className={classes.btnBack}>
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
      <button className={classes.btnForward}>
        <img src={btnForward} alt="btnForward ico" />
      </button>
    </div>
  );
};

export default DateRangeSelector;
