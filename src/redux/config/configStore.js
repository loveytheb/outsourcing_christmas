import { configureStore } from "@reduxjs/toolkit";
import modalState from "../modules/modalState";
import authSlice from "../modules/authSlice";
import customModalSlice from "../modules/customModalSlice";

const store = configureStore({
  reducer: {
    modalState: modalState,
    authSlice: authSlice,
    customModalSlice: customModalSlice,
  },
});

export default store;
