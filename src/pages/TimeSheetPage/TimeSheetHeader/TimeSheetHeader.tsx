import React from "react";
import classes from "./TimeSheetHeader.module.css";
import HoursSelector from "../../../components/HoursSelector/HoursSelector";
import DateRangeSelector from "../../../components/DateRangeSelector/DateRangeSelector";
import SaveClearSelector from "../../../components/SaveClearSelector/SaveClearSelector";

type PropsType = {
  scrollAnchorStart: React.MutableRefObject<HTMLDivElement | null>;
  scrollAnchorEnd: React.MutableRefObject<HTMLDivElement | null>;
};

const TimeSheetHeader: React.FC<PropsType> = ({ scrollAnchorStart, scrollAnchorEnd }) => {
  return (
    <div className={classes.container}>
      <div className={classes.leftPart}>
        <div className={classes.title}>Табель</div>
        <HoursSelector />
        <DateRangeSelector scrollAnchorStart={scrollAnchorStart} scrollAnchorEnd={scrollAnchorEnd} />
      </div>
      <SaveClearSelector />
    </div>
  );
};

export default TimeSheetHeader;
