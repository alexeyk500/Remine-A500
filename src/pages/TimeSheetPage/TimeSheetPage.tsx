import React from "react";
import classes from "./TimeSheetPage.module.css";
import TimeSheetHeader from "./TimeSheetHeader/TimeSheetHeader";

const TimeSheetPage: React.FC = () => {
  return (
    <div className={classes.container}>
      <TimeSheetHeader />
    </div>
  );
};

export default TimeSheetPage;
