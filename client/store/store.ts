import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice";
import usersDataReducer from "./slice/usersDataSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    usersData: usersDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
