import React from "react";
import classes from "./TimeSheetPage.module.css";
import TimeSheetHeader from "./TimeSheetHeader/TimeSheetHeader";
import TimeSheetTable from "./TimeSheetTable/TimeSheetTable";

const TimeSheetPage: React.FC = () => {
  return (
    <div className={classes.container}>
      <TimeSheetHeader />
      <TimeSheetTable />
    </div>
  );
};

export default TimeSheetPage;
