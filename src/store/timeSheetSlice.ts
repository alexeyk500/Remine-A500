import { daysRangeType, TimeEntryType } from "../types/types";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { serverApi } from "../api/serverApi";
import { showError } from "./errorHelper";
import { RootState } from "./store";
import { getNewTimeEntry } from "../utils/functions";

export interface TimeSheetState {
  isLoading: boolean;
  timeEntries: TimeEntryType[];
  referenceTimeEntries: TimeEntryType[];
  daysRange: daysRangeType | undefined;
  newTimeEntries: TimeEntryType[];
}

const initialState: TimeSheetState = {
  isLoading: false,
  timeEntries: [],
  referenceTimeEntries: [],
  daysRange: undefined,
  newTimeEntries: [],
};

export const getTimeEntriesThunk = createAsyncThunk<
  { time_entries: TimeEntryType[] },
  { from: string; to: string },
  { rejectValue: string }
>("timeSheet/getTimeEntriesThunk", async (dataFromTo, { rejectWithValue }) => {
  try {
    return await serverApi.fetchTimeEntries(dataFromTo);
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
    changeHoursTimeEntry: (state, action: PayloadAction<{ id: string; hours: string }>) => {
      const timeEntryInd = state.timeEntries.findIndex((entry) => entry.id === action.payload.id);
      if (timeEntryInd > -1) {
        state.timeEntries[timeEntryInd].hours = Number(action.payload.hours);
      } else {
        const newTimeEntryInd = state.newTimeEntries.findIndex((entry) => entry.id === action.payload.id);
        if (newTimeEntryInd > -1) {
          state.newTimeEntries[newTimeEntryInd].hours = Number(action.payload.hours);
        }
      }
    },
    clearNewTimeEntries: (state) => {
      state.newTimeEntries = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTimeEntriesThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTimeEntriesThunk.fulfilled, (state, action) => {
        state.timeEntries = action.payload.time_entries;
        state.referenceTimeEntries = action.payload.time_entries;
        state.isLoading = false;
      })
      .addCase(getTimeEntriesThunk.rejected, (state, action) => {
        showError(action.payload);
        state.isLoading = false;
      });
  },
});

export const { setDaysRange, addNewTimeEntry, changeHoursTimeEntry, clearNewTimeEntries } = timeSheetSlice.actions;
export const selectorFullTimeEntries = (state: RootState) => [
  ...state.timeSheet.timeEntries,
  ...state.timeSheet.newTimeEntries,
];
export const selectorDaysRange = (state: RootState) => state.timeSheet.daysRange;
export const selectorTimeEntriesIsLoading = (state: RootState) => state.timeSheet.isLoading;

export default timeSheetSlice.reducer;
