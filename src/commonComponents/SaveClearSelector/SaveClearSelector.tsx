import React from "react";
import classes from "./SaveClearSelector.module.css";

const SaveClearSelector: React.FC = () => {
  return (
    <div className={classes.container}>
      <button className={classes.btnSave}>Сохранить</button>
      <button className={classes.btnClear}>Очистить</button>
    </div>
  );
};

export default SaveClearSelector;
