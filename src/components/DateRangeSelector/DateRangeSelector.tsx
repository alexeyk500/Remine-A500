import React from "react";
import classes from "./DateRangeSelector.module.css";
import btnBack from "./../../images/btnBack.svg";
import btnForward from "./../../images/btnForward.svg";
import DataPicker from "../DataPicker/DataPicker";

const DateRangeSelector: React.FC = () => {
  return (
    <div className={classes.container}>
      <button className={classes.btnBack}>
        <img src={btnBack} alt="btnBack ico" />
      </button>
      <div className={classes.centerContainer}>
        <div className={classes.fromSelector}>
          <DataPicker />
        </div>
        <div className={classes.splitter}>—</div>
        <div className={classes.toSelector}>
          <DataPicker />
        </div>
      </div>
      <button className={classes.btnForward}>
        <img src={btnForward} alt="btnForward ico" />
      </button>
    </div>
  );
};

export default DateRangeSelector;
