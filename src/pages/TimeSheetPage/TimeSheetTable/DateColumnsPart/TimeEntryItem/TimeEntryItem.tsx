import React from "react";
import classes from "./TimeEntryItem.module.css";
import { getDayOfWeek } from "../../../../../utils/functions";
import { useAppSelector } from "../../../../../store/hooks";
import { selectorFullTimeEntries } from "../../../../../store/timeSheetSlice";
import TimeSheetItem from "./TimeSheetItem/TimeSheetItem";

type PropsType = {
  currentDate: string;
};

const TimeEntryItem: React.FC<PropsType> = ({ currentDate }) => {
  const date = currentDate.split("-");

  const fullTimeEntries = useAppSelector(selectorFullTimeEntries);
  let sumHours = 0;
  const isOddNumber = Number(currentDate.split("-")[2]) % 2 === 0;
  // console.log('fullTimeEntries =', fullTimeEntries)

  return (
    <div className={classes.container}>
      <div className={classes.itemHeader}>
        <div className={classes.itemTitle}>{`${date[2]}.${date[1]}`}</div>
        <div className={classes.itemDayOfWeek}>{getDayOfWeek(currentDate)}</div>
      </div>
      <div className={classes.timeEntries}>
        {fullTimeEntries.map((timeEntry) => {
          if (timeEntry.spent_on === currentDate) {
            // console.log('timeEntry =', timeEntry)
            sumHours += Number(timeEntry.hours);
            return <TimeSheetItem key={timeEntry.id} timeEntry={timeEntry} />;
          } else {
            return null;
          }
        })}
      </div>
      <div className={classes.summarize}>
        <div
          className={classes.resultTitle}
          style={{
            paddingTop: sumHours === 0 ? "12px" : "0",
            color: isOddNumber && sumHours > 0 ? "#3448FF" : sumHours === 0 ? "#7174AC" : "#212346",
          }}
        >
          {sumHours}
        </div>
        <div className={classes.resultTitle} style={{ color: isOddNumber && sumHours > 0 ? "#3448FF" : "#212346" }}>
          {sumHours === 0 ? "" : sumHours - 8}
        </div>
      </div>
    </div>
  );
};

export default TimeEntryItem;
