import React from "react";
import classes from "./TimeSheetTable.module.css";
import SelectorsColumnsPart from "./SelectorsColumnsPart/SelectorsColumnsPart";

const TimeSheetTable: React.FC = () => {
  return (
    <div className={classes.container}>
      <SelectorsColumnsPart />
    </div>
  );
};

export default TimeSheetTable;
