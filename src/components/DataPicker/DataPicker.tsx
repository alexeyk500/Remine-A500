import React from "react";
import classes from "./DataPicker.module.css";
import { getDataStrForDaysRange } from "../../utils/functions";

const DataPicker: React.FC = () => {
  const dataStr = getDataStrForDaysRange("2022-07-10");
  console.log("dataStr =", dataStr);

  return <div className={classes.container}>{dataStr}</div>;
};

export default DataPicker;
