import { daysRangeType, TimeEntryType } from "../types/types";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { serverApi } from "../api/serverApi";
import { showError } from "./errorHelper";
import { RootState } from "./store";
import { getNewTimeEntry } from "../utils/functions";

export interface TimeSheetState {
  isLoading: boolean;
  timeEntries: TimeEntryType[];
  daysRange: daysRangeType | undefined;
  newTimeEntries: TimeEntryType[];
}

const initialState: TimeSheetState = {
  isLoading: false,
  timeEntries: [],
  daysRange: undefined,
  newTimeEntries: [],
};

export const getTimeEntriesThunk = createAsyncThunk<
  { time_entries: TimeEntryType[] },
  undefined,
  { rejectValue: string }
>("timeSheet/getTimeEntriesThunk", async (_, { rejectWithValue }) => {
  try {
    return await serverApi.fetchTimeEntries();
  } catch (e) {
    return rejectWithValue("Server error - get User");
  }
});

export const timeSheetSlice = createSlice({
  name: "timeSheet",
  initialState,
  reducers: {
    setDaysRange: (state, action: PayloadAction<daysRangeType | undefined>) => {
      state.daysRange = action.payload;
    },
    addNewTimeEntry: (state, action: PayloadAction<string>) => {
      state.newTimeEntries.push(getNewTimeEntry(action.payload));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTimeEntriesThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTimeEntriesThunk.fulfilled, (state, action) => {
        state.timeEntries = action.payload.time_entries;
        state.isLoading = false;
      })
      .addCase(getTimeEntriesThunk.rejected, (state, action) => {
        showError(action.payload);
        state.isLoading = false;
      });
  },
});

export const { setDaysRange, addNewTimeEntry } = timeSheetSlice.actions;

export const selectorTimeEntries = (state: RootState) => state.timeSheet.timeEntries;
export const selectorFullTimeEntries = (state: RootState) => [
  ...state.timeSheet.timeEntries,
  ...state.timeSheet.newTimeEntries,
];
export const selectorDaysRange = (state: RootState) => state.timeSheet.daysRange;
export const selectorTimeEntriesIsLoading = (state: RootState) => state.timeSheet.isLoading;

export default timeSheetSlice.reducer;
