import React, {useEffect, useRef} from "react";
import classes from "./TimeSheetPage.module.css";
import TimeSheetHeader from "./TimeSheetHeader/TimeSheetHeader";
import TimeSheetTable from "./TimeSheetTable/TimeSheetTable";
import { useAppDispatch } from "../../store/hooks";
import { getTimeEntriesThunk, setDaysRange } from "../../store/timeSheetSlice";

const TimeSheetPage: React.FC = () => {
  const dispatch = useAppDispatch();

  const scrollAnchorStart = useRef<HTMLDivElement | null>(null);
  const scrollAnchorEnd = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    dispatch(setDaysRange({ from: "2022-07-10", to: "2022-07-31" }));
    dispatch(getTimeEntriesThunk());
    // eslint-disable-next-line
  }, []);

  return (
    <div className={classes.container}>
      <TimeSheetHeader scrollAnchorStart = {scrollAnchorStart} scrollAnchorEnd= {scrollAnchorEnd}/>
      <TimeSheetTable scrollAnchorStart = {scrollAnchorStart} scrollAnchorEnd= {scrollAnchorEnd} />
    </div>
  );
};

export default TimeSheetPage;
