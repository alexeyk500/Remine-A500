import React from "react";
import classes from "./SaveClearSelector.module.css";
import { clearNewTimeEntries, getTimeEntriesThunk, selectorDaysRange } from "../../store/timeSheetSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

const SaveClearSelector: React.FC = () => {
  const dispatch = useAppDispatch();
  const dayRange = useAppSelector(selectorDaysRange);

  const onClickClear = () => {
    const conf = window.confirm(`Отменить изменения?`);
    if (conf && dayRange) {
      dispatch(clearNewTimeEntries());
      dispatch(getTimeEntriesThunk());
    }
  };

  const onClickSave = () => {
    const conf = window.confirm(`Сохранить изменения?`);
    if (conf) {
      console.log("will save");
    }
  };

  return (
    <div className={classes.container}>
      <button className={classes.btnSave} onClick={onClickSave}>
        Сохранить
      </button>
      <button className={classes.btnClear} onClick={onClickClear}>
        Очистить
      </button>
    </div>
  );
};

export default SaveClearSelector;
