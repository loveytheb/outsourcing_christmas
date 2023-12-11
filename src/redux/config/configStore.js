import { configureStore } from "@reduxjs/toolkit";
import modalState from "../modules/modalState";
import authSlice from "../modules/authSlice";
import customModalSlice from "../modules/customModalSlice";
import addrSlice from "../modules/addrSlice";

const store = configureStore({
  reducer: {
    modalState: modalState,
    authSlice: authSlice,
    customModalSlice: customModalSlice,
    addrSlice: addrSlice,
  },
});

export default store;
