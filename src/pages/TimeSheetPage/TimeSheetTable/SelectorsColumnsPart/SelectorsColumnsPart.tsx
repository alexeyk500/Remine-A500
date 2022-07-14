import React from "react";
import SelectorsColumn from "./SelectorsColumn/SelectorsColumn";
import classes from "./SelectorsColumnsPart.module.css";
import addBtn from "./../../../../images/addBtn.svg";

const SelectorsColumnsPart: React.FC = () => {
  return (
    <div className={classes.container}>
      <div className={classes.selectorsColumns}>
        <SelectorsColumn title={"Проект"} selectors={["Test Project", "Административный", "Проект 1"]} />
        <SelectorsColumn
          title={"Задача"}
          selectors={["Contract/Order", "Planned Cost", "Resource Project Task", "Administrative Task"]}
        />
      </div>
      <div className={classes.selectorsBottom}>
        <button className={classes.addBtn}>
          <img src={addBtn} alt="addBtn ico" />
        </button>
        <div className={classes.resultGroup}>
          <div className={classes.resultTitle}>Итого</div>
          <div className={classes.resultTitle}>Простой/Перегруз</div>
        </div>
      </div>
    </div>
  );
};

export default SelectorsColumnsPart;
