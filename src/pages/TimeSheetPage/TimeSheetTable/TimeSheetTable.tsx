import React from "react";
import classes from "./TimeSheetTable.module.css";
import SelectorsColumnsPart from "./SelectorsColumnsPart/SelectorsColumnsPart";
import DateColumnsPart from "./DateColumnsPart/DateColumnsPart";

const TimeSheetTable: React.FC = () => {
  return (
    <div className={classes.container}>
      <SelectorsColumnsPart />
      <DateColumnsPart />
    </div>
  );
};

export default TimeSheetTable;
