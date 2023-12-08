import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modalOpen: false,
    modalType: "login",
}

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        setModalOpen: (state, action) => {
            return {...state, modalOpen: action.payload};
        },
        setModalType: (state, action) => {
            return {...state, modalType: action.payload};
        }
    }
});

export default modalSlice.reducer;
export const { setModalOpen, setModalType } = modalSlice.actions;