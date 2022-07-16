import React, { useEffect, useState } from "react";
import classes from "./DateColumnsPart.module.css";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { addNewTimeEntry, selectorDaysRange, selectorFullTimeEntries } from "../../../../store/timeSheetSlice";
import TimeEntryItem from "./TimeEntryItem/TimeEntryItem";
import { getStringDatesArray } from "../../../../utils/functions";

type PropsType = {
  scrollAnchorStart: React.MutableRefObject<HTMLDivElement | null>;
  scrollAnchorEnd: React.MutableRefObject<HTMLDivElement | null>;
};

const DateColumnsPart: React.FC<PropsType> = ({ scrollAnchorStart, scrollAnchorEnd }) => {
  const daysRange = useAppSelector(selectorDaysRange);
  const [daysArray, setDaysArray] = useState<string[]>([]);
  const fullTimeEntries = useAppSelector(selectorFullTimeEntries);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (daysRange) {
      const daysArray = getStringDatesArray(daysRange.from, daysRange.to);
      setDaysArray(daysArray);

      if (!!fullTimeEntries.length) {
        daysArray.forEach((currentDate) => {
          const matchedTimeEntries = fullTimeEntries.filter(
            (curTimeEntries) => curTimeEntries.spent_on === currentDate
          );
          if (matchedTimeEntries.length === 0) {
            dispatch(addNewTimeEntry(currentDate));
          }
        });
      }
    }
    // eslint-disable-next-line
  }, [daysRange, fullTimeEntries]);

  const [sumHours, setSumHours] = useState(0);
  const [sumExtraHours, setSumExtraHours] = useState(0);

  useEffect(() => {
    let localSumHours = 0;
    let localSumExtraHours = 0;

    fullTimeEntries.forEach((timeEntry) => {
      if (daysArray.includes(timeEntry.spent_on)) {
        localSumHours += Number(timeEntry.hours);
        if (Number(timeEntry.hours) > 0) {
          localSumExtraHours += Number(timeEntry.hours) - 8;
        }
      }
    });
    setSumHours(localSumHours);
    setSumExtraHours(localSumExtraHours);
    // eslint-disable-next-line
  }, [fullTimeEntries]);

  return (
    <div className={classes.container}>
      <div className={classes.scrollContainer}>
        <div ref={scrollAnchorStart} />
        {daysArray.map((currentDate, ind) => (
          <TimeEntryItem key={ind} currentDate={currentDate} />
        ))}
        <div ref={scrollAnchorEnd} />
      </div>
      <div className={classes.resultColum}>
        <div className={classes.title}>Итого</div>
        <div className={classes.resultPart}>{sumHours}</div>
        <div className={classes.summarizePart}>
          <div className={classes.resultTitle}>{sumHours}</div>
          <div className={classes.resultTitle}>{sumExtraHours}</div>
        </div>
      </div>
    </div>
  );
};

export default DateColumnsPart;
