import React from "react";
import classes from "./TimeSheetHeader.module.css";
import HoursSelector from "../../../components/HoursSelector/HoursSelector";
import SaveClearSelector from "../../../components/SaveClearSelector/SaveClearSelector";
import CustomDatePicker from "../../../components/CustomDatePicker/CustomDatePicker";

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
        <CustomDatePicker scrollAnchorStart={scrollAnchorStart} scrollAnchorEnd={scrollAnchorEnd} />
      </div>
      <SaveClearSelector />
    </div>
  );
};

export default TimeSheetHeader;
