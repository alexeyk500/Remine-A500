import { instanceAxios } from "../instanceAxios";
import { TimeEntryType } from "../../types/types";

export const timeSheetApi = {
  async fetchTimeEntries({ from, to }: { from: string; to: string }) {
    const response = await instanceAxios.get<{ time_entries: TimeEntryType[] }>(
      `time_entries.json?key=${process.env.REACT_APP_REDMINE_KEY}&from=${from}&to=${to}`
    );
    return response.data;
  },
};
