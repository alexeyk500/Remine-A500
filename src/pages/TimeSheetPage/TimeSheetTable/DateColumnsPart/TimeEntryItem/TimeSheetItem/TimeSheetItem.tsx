import React from "react";
import classes from "./TimeSheetItem.module.css";
import { TimeEntryType } from "../../../../../../types/types";

type PropsType = {
  timeEntry: TimeEntryType;
};

const TimeSheetItem: React.FC<PropsType> = ({ timeEntry }) => {
  return (
    <div className={classes.container}>
      <div className={classes.hoursRow} style={{ color: timeEntry.hours === 0 ? "#7174AC" : "#212346" }}>
        {timeEntry.hours}
      </div>
      <div
        className={classes.commentRow}
        style={{
          color: timeEntry.hours === 0 ? "#7174AC" : "#212346",
          fontSize: timeEntry.comments.length === 0 ? "8px" : "10px",
        }}
      >
        {!!timeEntry.comments.length ? timeEntry.comments : "Без комментариев"}
      </div>
    </div>
  );
};

export default TimeSheetItem;
