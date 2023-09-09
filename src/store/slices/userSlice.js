import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action) {
      return { ...state, user: action.payload, isAuthenticated: true };
    },
    logout(state) {
      return { ...state, user: null, isAuthenticated: false };
    },
  },
});

export const { login, logout } = userSlice.actions;
export const userReducer = userSlice.reducer;
