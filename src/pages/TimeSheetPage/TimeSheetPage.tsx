import React, { useEffect } from "react";
import classes from "./TimeSheetPage.module.css";
import TimeSheetHeader from "./TimeSheetHeader/TimeSheetHeader";
import TimeSheetTable from "./TimeSheetTable/TimeSheetTable";
import { useAppDispatch } from "../../store/hooks";
import { getTimeEntriesThunk, setDaysRange } from "../../store/timeSheetSlice";

const TimeSheetPage: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setDaysRange({ from: "2022-07-10", to: "2022-07-16" }));
    dispatch(getTimeEntriesThunk());
    // eslint-disable-next-line
  }, []);

  return (
    <div className={classes.container}>
      <TimeSheetHeader />
      <TimeSheetTable />
    </div>
  );
};

export default TimeSheetPage;
