import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from "redux-persist";

import { filterReducer } from "./filter/filterSlice";
import { authReducer } from "./auth/authSlice";
import { contactsReducer } from "./contacts/contactsSlice";
import { themeReducer } from "./Theme/ThemeSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        contacts: contactsReducer,
        filter: filterReducer,
        theme: themeReducer,
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            }})
})

export const persistor = persistStore(store);