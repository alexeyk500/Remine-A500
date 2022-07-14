import React from "react";
import classes from "./HoursSelector.module.css";

const HoursSelector: React.FC = () => {
  return (
    <div className={classes.container}>
      <div className={classes.leftSelector}>Основные часы</div>
      <div className={classes.rightSelector}>Сверхурочные</div>
    </div>
  );
};

export default HoursSelector;
