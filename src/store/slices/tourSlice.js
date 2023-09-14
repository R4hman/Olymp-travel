import { createSlice } from "@reduxjs/toolkit";
import { addDays } from "date-fns";

const initialState = {
  timeRange: undefined,
  type: "",
  // city: null,
};

const tourSlice = createSlice({
  name: "tour",
  initialState,
  reducers: {
    setTime(state, action) {
      state.timeRange = action.payload;
    },
    setType(state, action) {
      state.type = action.payload;
    },
    // setCity(state, action) {
    //   state.city = action.payload;
    // },
  },
});

// console.log(tourSlice);
export const { setTime, setCity, setType } = tourSlice.actions;
export const tourReducer = tourSlice.reducer;
