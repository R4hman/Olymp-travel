import { createSlice } from "@reduxjs/toolkit";
import { addDays } from "date-fns";

const initialState = {
  timeRange: [
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ],
  city: null,
};

const tourSlice = createSlice({
  name: "tour",
  initialState,
  reducers: {
    setTime(state, action) {
      state.timeRange = action.payload;
    },
    setCity(state, action) {
      state.city = action.payload;
    },
  },
});

// console.log(tourSlice);
export const { setTime, setCity } = tourSlice.actions;
export const tourReducer = tourSlice.reducer;
