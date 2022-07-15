import {TimeEntryType} from "../types/types";
import {v4 as uuidv4} from "uuid";

export const compareStrData = (a: string, b: string) => {
  const dateA = +new Date(a);
  const dateB = +new Date(b);
  return dateA - dateB;
};

export const getDayOfWeek = (strDate: string) => {
  const date = new Date(strDate);
  const dayOfWeek = date.toLocaleString(window.navigator.language, { weekday: "short" });
  return dayOfWeek[0].toUpperCase() + dayOfWeek.slice(1);
};

export const getStringDatesArray = (startDate: string, stopDate: string) => {
  const dateArray = [];
  const currentDate = new Date(startDate);
  while (currentDate <= new Date(stopDate)) {
    dateArray.push(currentDate.toISOString().split("T")[0]);
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return dateArray;
};

export const getDataStrForDaysRange = (strDate: string) => {
  const data = new Date(strDate);
  return data.toLocaleDateString("ru-Ru", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).split('г')[0]
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
