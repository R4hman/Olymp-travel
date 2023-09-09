import { configureStore } from "@reduxjs/toolkit";
import { tourReducer } from "./slices/tourSlice";
import { favoriteReducer } from "./slices/favoritesSlice";
import { userReducer } from "./slices/userSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

const persistConfig = {
  key: "favorite",
  version: 1,
  storage,
  blacklist: ["user", "tour"],
};

const reducer = combineReducers({
  tour: tourReducer,
  favorite: favoriteReducer,
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export default store;
