import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    setFavorites(state, action) {
      console.log("action payload", action.payload);
      const item = state.favorites.find((x) => x.id === action.payload.id);
      !item && state.favorites.push(action.payload);
    },
    deleteFavorites(state, action) {
      state.favorites = state.favorites.filter(
        (item) => item.id !== action.payload
      );
    },
    clearFavorites(state) {
      state.favorites = [];
    },
    setIsClicked(state, action) {
      const item = state.favorites.find((f) => +f.id === +action.payload);
      console.log("slice item: " + item);
      if (item) {
        item.isInFavorite = !item.isInFavorite;
        // const obj = { ...item, isInFavorites: !item.isInFavorites };
        // state.favorites = state.favorites.filter(
        //   (el) => el.id === action.payload
        // );
        // state.favorites.push(obj);
      }
    },
  },
});

export const { setFavorites, deleteFavorites, clearFavorites, setIsClicked } =
  favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;

export const getTotalCartPrice = (state) => {
  state.favorite.favorite.reduce((acc, cur) => acc + cur.price, 0);
};
