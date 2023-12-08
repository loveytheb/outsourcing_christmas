import { configureStore } from "@reduxjs/toolkit";
import modalState from "../modules/modalState";
import authSlice from "../modules/authSlice";

const store = configureStore({
    reducer: {
        modalState: modalState,
        authSlice: authSlice,
    },
});

export default store;