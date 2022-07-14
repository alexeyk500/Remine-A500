import React from "react";
import classes from "./TimeSheetHeader.module.css";
import HoursSelector from "../../../commonComponents/HoursSelector/HoursSelector";
import DateRangeSelector from "../../../commonComponents/DateRangeSelector/DateRangeSelector";
import SaveClearSelector from "../../../commonComponents/SaveClearSelector/SaveClearSelector";

const TimeSheetHeader: React.FC = () => {
  return (
    <div className={classes.container}>
      <div className={classes.leftPart}>
        <div className={classes.title}>Табель</div>
        <HoursSelector />
        <DateRangeSelector />
      </div>
      <SaveClearSelector />
    </div>
  );
};

export default TimeSheetHeader;
