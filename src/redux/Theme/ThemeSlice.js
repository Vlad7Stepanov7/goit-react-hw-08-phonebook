import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
  darkMode: false,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: state => {
      state.darkMode = !state.darkMode;
    },
  },
});

const persistConfig = {
  key: 'theme',
  storage,
};

export const { toggleTheme } = themeSlice.actions;

export const themeReducer = persistReducer(persistConfig, themeSlice.reducer);
