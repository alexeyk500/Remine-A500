import { TimeEntryType } from "../types/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { serverApi } from "../api/serverApi";
import { showError } from "./errorHelper";
import { RootState } from "./store";

export interface TimeSheetState {
  isLoading: boolean;
  timeEntries: TimeEntryType[];
}

const initialState: TimeSheetState = {
  isLoading: false,
  timeEntries: [],
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
  reducers: {},
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

export const selectorTimeEntries = (state: RootState) => state.timeSheet.timeEntries;
export const selectorTimeEntriesIsLoading = (state: RootState) => state.timeSheet.isLoading;

export default timeSheetSlice.reducer;
