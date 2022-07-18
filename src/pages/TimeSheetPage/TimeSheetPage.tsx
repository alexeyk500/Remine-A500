import React, { useEffect, useRef } from "react";
import classes from "./TimeSheetPage.module.css";
import TimeSheetHeader from "./TimeSheetHeader/TimeSheetHeader";
import TimeSheetTable from "./TimeSheetTable/TimeSheetTable";
import { useAppDispatch } from "../../store/hooks";
import { getTimeEntriesThunk, setDaysRange } from "../../store/timeSheetSlice";
import { dateToStrDate } from "../../utils/functions";

const TimeSheetPage: React.FC = () => {
  const dispatch = useAppDispatch();

  const scrollAnchorStart = useRef<HTMLDivElement | null>(null);
  const scrollAnchorEnd = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const dateTo = dateToStrDate(new Date());
    const dateFromDate = new Date();
    dateFromDate.setDate(dateFromDate.getDate() - 14);
    const dateFrom = dateToStrDate(dateFromDate);
    dispatch(setDaysRange({ from: dateFrom, to: dateTo }));
    dispatch(getTimeEntriesThunk());
    // eslint-disable-next-line
  }, []);

  return (
    <div className={classes.container}>
      <TimeSheetHeader scrollAnchorStart={scrollAnchorStart} scrollAnchorEnd={scrollAnchorEnd} />
      <TimeSheetTable scrollAnchorStart={scrollAnchorStart} scrollAnchorEnd={scrollAnchorEnd} />
    </div>
  );
};

export default TimeSheetPage;
