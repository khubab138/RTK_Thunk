import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Slice/UserDetailSlice";

export const store = configureStore({
  reducer: {
    userDetail: userReducer,
  },
});
