import { TimeEntryType } from "../types/types";
import { v4 as uuidv4 } from "uuid";

export const getDayOfWeek = (strDate: string) => {
  const date = new Date(strDate);
  const dayOfWeek = date.toLocaleString(window.navigator.language, { weekday: "short" });
  return dayOfWeek[0].toUpperCase() + dayOfWeek.slice(1);
};

export const dateToStrDate = (date: Date) => {
  return date.toISOString().split("T")[0];
};

export const getStringDatesArray = (startDate: string, stopDate: string) => {
  const dateArray = [];
  const currentDate = new Date(startDate);
  while (currentDate <= new Date(stopDate)) {
    dateArray.push(dateToStrDate(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return dateArray;
};

export const getDataStrForDaysRange = (strDate: string) => {
  const data = new Date(strDate);
  const localData = data.toLocaleDateString("ru-Ru", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const splitLocalData = localData.split(" ");
  return `${splitLocalData[0]} ${splitLocalData[1]} ${splitLocalData[2]}`;
};

export const getNewTimeEntry = (date: string): TimeEntryType => {
  return {
    id: "-" + uuidv4(),
    project: {
      id: "251",
      name: "Coherra T&M",
    },
    issue: {
      id: "11798",
    },
    user: {
      id: "318",
      name: "Стюпан Алексей Сергеевич",
    },
    activity: {
      id: "16",
      name: "Не требуется",
    },
    hours: 0,
    comments: "",
    spent_on: date,
    custom_fields: [],
  };
};

export const ExpandOneDayTo = (strDate: string) => {
  const currentDate = new Date(strDate);
  currentDate.setDate(currentDate.getDate() + 1);
  return dateToStrDate(currentDate);
};

export const ExpandOneDayFrom = (strDate: string) => {
  const currentDate = new Date(strDate);
  currentDate.setDate(currentDate.getDate() - 1);
  return dateToStrDate(currentDate);
};
