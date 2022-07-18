import React from "react";
import classes from "./TimeSheetItem.module.css";
import { TimeEntryType } from "../../../../../../types/types";
import { useAppDispatch } from "../../../../../../store/hooks";
import { changeHoursTimeEntry } from "../../../../../../store/timeSheetSlice";

type PropsType = {
  timeEntry: TimeEntryType;
};

const TimeSheetItem: React.FC<PropsType> = ({ timeEntry }) => {
  const dispatch = useAppDispatch();

  const onChange = (newValue: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeHoursTimeEntry({ id: timeEntry.id, hours: newValue.currentTarget.value }));
  };
  return (
    <div className={classes.container}>
      <input
        className={classes.hoursInput}
        style={{ color: timeEntry.hours === 0 ? "#7174AC" : "#212346" }}
        value={timeEntry.hours}
        onChange={onChange}
      />
      <div
        className={classes.commentRow}
        style={{
          color: timeEntry.hours === 0 ? "#7174AC" : "#212346",
        }}
      >
        {timeEntry.comments && !!timeEntry.comments.length ? timeEntry.comments : "Комментариев нет"}
      </div>
    </div>
  );
};

export default TimeSheetItem;
