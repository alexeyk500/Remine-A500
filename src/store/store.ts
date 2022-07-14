import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

import timeSheetReducer from "./timeSheetSlice";

export const store = configureStore({
  reducer: {
    timeSheet: timeSheetReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
