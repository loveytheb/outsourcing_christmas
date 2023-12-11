import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  modalType: "addForm",
};

const customModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showCustomModal: (state, action) => {
      return { ...state, isOpen: action.payload };
    },
    customModalType: (state, action) => {
      return { ...state, customModalType: action.payload };
    },
  },
});

export default customModalSlice.reducer;
export const { showCustomModal, customModalType } = customModalSlice.actions;
