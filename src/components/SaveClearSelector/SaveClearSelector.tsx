import React from "react";
import classes from "./SaveClearSelector.module.css";
import {
  clearAllTimeEntries,
  clearNewTimeEntries,
  getTimeEntriesThunk,
  selectorDaysRange,
  selectorNewTimeEntries,
  selectorReferenceTimeEntries,
  selectorTimeEntries,
} from "../../store/timeSheetSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { TimeEntryType } from "../../types/types";
import axios from "axios";

const SaveClearSelector: React.FC = () => {
  const dispatch = useAppDispatch();
  const dayRange = useAppSelector(selectorDaysRange);
  const newTimeEntries = useAppSelector(selectorNewTimeEntries);
  const timeEntries = useAppSelector(selectorTimeEntries);
  const referenceTimeEntries = useAppSelector(selectorReferenceTimeEntries);

  const onClickClear = () => {
    const conf = window.confirm(`Отменить изменения?`);
    if (conf && dayRange) {
      dispatch(clearNewTimeEntries());
      dispatch(getTimeEntriesThunk({ from: dayRange.from, to: dayRange.to }));
    }
  };

  const onClickSave = () => {
    const timeEntriesForCreating = newTimeEntries.filter((timeEntry) => timeEntry.hours > 0);
    const timeEntriesForDeleting = timeEntries.filter((timeEntry) => timeEntry.hours === 0);
    const timeEntriesForUpdating: TimeEntryType[] = [];
    timeEntries.forEach((timeEntry) => {
      const referenceTimeEntry = referenceTimeEntries.filter((refTimeEntry) => refTimeEntry.id === timeEntry.id)[0];
      if (referenceTimeEntry && referenceTimeEntry.hours !== timeEntry.hours && timeEntry.hours > 0) {
        timeEntriesForUpdating.push(timeEntry);
      }
    });

    const promisesCreating: Promise<any>[] = [];
    timeEntriesForCreating.forEach((timeEntry) => {
      // const promise = axios.post(`proxy/time_entries.json?key=${process.env.REACT_APP_REDMINE_KEY}`, {
      const promise = axios.post(`https://cors-anywhere.herokuapp.com/https://opt2.rbtechnologies.ru:9909/time_entries.json?key=${process.env.REACT_APP_REDMINE_KEY}`, {
        time_entry: {
          issue_id: 11798,
          spent_on: timeEntry.spent_on,
          hours: timeEntry.hours,
          comments: timeEntry.comments,
        },
      });
      promisesCreating.push(promise);
    });

    const promisesUpdating: Promise<any>[] = [];
    timeEntriesForUpdating.forEach((timeEntry) => {
      // const promise = axios.put(`proxy/time_entries/${timeEntry.id}.json?key=${process.env.REACT_APP_REDMINE_KEY}`, {
      const promise = axios.put(`https://cors-anywhere.herokuapp.com/https://opt2.rbtechnologies.ru:9909/time_entries/${timeEntry.id}.json?key=${process.env.REACT_APP_REDMINE_KEY}`, {
        time_entry: timeEntry,
      });
      promisesUpdating.push(promise);
    });

    const promisesDeleting: Promise<any>[] = [];
    timeEntriesForDeleting.forEach((timeEntry) => {
      // const promise = axios.delete(`proxy/time_entries/${timeEntry.id}.json?key=${process.env.REACT_APP_REDMINE_KEY}`);
      const promise = axios.delete(`https://cors-anywhere.herokuapp.com/https://opt2.rbtechnologies.ru:9909/time_entries/${timeEntry.id}.json?key=${process.env.REACT_APP_REDMINE_KEY}`);
      promisesUpdating.push(promise);
    });
    Promise.all([...promisesCreating, ...promisesUpdating, ...promisesDeleting]).then(() => {
      if (dayRange) {
        dispatch(clearAllTimeEntries());
        dispatch(getTimeEntriesThunk({ from: dayRange.from, to: dayRange.to }));
      }
    });
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
