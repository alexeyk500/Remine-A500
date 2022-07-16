import React from "react";
import classes from "./TimeSheetTable.module.css";
import SelectorsColumnsPart from "./SelectorsColumnsPart/SelectorsColumnsPart";
import DateColumnsPart from "./DateColumnsPart/DateColumnsPart";

type PropsType = {
  scrollAnchorStart: React.MutableRefObject<HTMLDivElement | null>;
  scrollAnchorEnd: React.MutableRefObject<HTMLDivElement | null>;
};

const TimeSheetTable: React.FC<PropsType> = ({ scrollAnchorStart, scrollAnchorEnd }) => {
  return (
    <div className={classes.container}>
      <SelectorsColumnsPart />
      <DateColumnsPart scrollAnchorStart={scrollAnchorStart} scrollAnchorEnd={scrollAnchorEnd} />
    </div>
  );
};

export default TimeSheetTable;
