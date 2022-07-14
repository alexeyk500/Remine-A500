import React from "react";
import classes from "./SelectorsColumn.module.css";
import SelectorItem from "./SelectorItem/SelectorItem";

type PropsType = {
  title: string;
  selectors: string[];
};

const SelectorsColumn: React.FC<PropsType> = ({ title, selectors }) => {
  return (
    <div className={classes.container}>
      <div className={classes.title}>{title}</div>
      <div className={classes.selectorsList}>
        {selectors.map((selector, ind) => (
          <SelectorItem key={ind} selectorName={selector} />
        ))}
      </div>
    </div>
  );
};

export default SelectorsColumn;
