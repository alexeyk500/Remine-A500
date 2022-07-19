import { TimeEntryType } from "../../types/types";
import axios from "axios";

export const timeSheetApi = {
  async fetchTimeEntries({ from, to }: { from: string; to: string }) {
    const response = await axios.get<{ time_entries: TimeEntryType[] }>(
      `https://cors-anywhere.herokuapp.com/https://opt2.rbtechnologies.ru:9909/time_entries.json?key=${process.env.REACT_APP_REDMINE_KEY}&from=${from}&to=${to}`
    );
    return response.data;
  },
};
