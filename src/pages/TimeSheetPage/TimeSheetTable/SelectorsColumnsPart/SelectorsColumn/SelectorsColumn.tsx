import React from "react";
import classes from "./SelectorsColumn.module.css";

type PropsType = {
  title: string;
  selectors: string[];
};

const SelectorsColumn: React.FC<PropsType> = ({ title, selectors }) => {
  return (
    <div className={classes.container}>
      <div className={classes.title}>{title}</div>
    </div>
  );
};

export default SelectorsColumn;
