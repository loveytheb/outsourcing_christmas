import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const __getAddress = createAsyncThunk(
  //action value
  "getAddress",
  //callback
  (payload, thunkAPI) => {
    thunkAPI.dispatch(getAddress(payload));
  }
);

const initialState = "";

const addrSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    getAddress: (state, action) => {
      console.log(action.payload);
      return action.payload;
    },
  },
});

export const { getAddress } = addrSlice.actions;
export default addrSlice.reducer;
