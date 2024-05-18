import { configureStore } from "@reduxjs/toolkit";
import schedulerReducer from "../pages/Scheduler/schedulerSlice";

export const store = configureStore({
  reducer: {
    scheduler: schedulerReducer,
  },
});
