import { createSlice } from "@reduxjs/toolkit";
import { registerUser, logIn, logOut, refreshUser } from "./operations";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const handlePending = (state) => {
  state.isRefreshing = true;
}

const handleRejected = (state, action) => {
  state.isRefreshing = false;
  state.isError = action.payload;
}

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isError: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) =>
      builder
        .addCase(registerUser.pending, (state) => handlePending(state))
        .addCase(registerUser.fulfilled, (state, action) => {
          state.user = action.payload.user;
          state.token = action.payload.token;
          state.isLoggedIn = true;
          state.isRefreshing = false;
        })
        .addCase(registerUser.rejected, (state, action) => handleRejected(state, action))
        .addCase(logIn.pending, (state) => handlePending(state))
        .addCase(logIn.fulfilled, (state, action) => {
          state.user = action.payload.user;
          state.token = action.payload.token;
          state.isLoggedIn = true;
          state.isRefreshing = false;
        })
        .addCase(logIn.rejected, (state, action) => handleRejected(state, action))
        .addCase(logOut.pending, (state) => handlePending(state))
        .addCase(logOut.fulfilled, (state, action) => {
          state.user = { name: null, email: null };
          state.token = null;
          state.isLoggedIn = false;
          state.isRefreshing = false;
        })
        .addCase(logOut.rejected, (state, action) => handleRejected(state, action))
        .addCase(refreshUser.pending, (state) => handlePending(state))
        .addCase(refreshUser.fulfilled, (state, action) => {
          state.user = action.payload;
          state.isLoggedIn = true;
          state.isRefreshing = false;
        })
        .addCase(refreshUser.rejected, (state, action) => handleRejected(state, action))
})

const authPersistCongig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
}

export const authReducer = persistReducer(authPersistCongig, authSlice.reducer)
