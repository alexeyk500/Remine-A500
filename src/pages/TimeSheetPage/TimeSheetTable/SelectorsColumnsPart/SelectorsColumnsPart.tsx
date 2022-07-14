import React from "react";
import SelectorsColumn from "./SelectorsColumn/SelectorsColumn";
import classes from "./SelectorsColumnsPart.module.css";

const SelectorsColumnsPart: React.FC = () => {
  return (
    <div className={classes.container}>
      <div className={classes.selectorsColumns}>
        <SelectorsColumn title={"Проект"} selectors={["Test Project", "Административный", "Проект 1"]} />
        <SelectorsColumn title={"Задача"} selectors={["Contract/Order", "Planned Cost", "Resource Project Task"]} />
      </div>
    </div>
  );
};

export default SelectorsColumnsPart;
