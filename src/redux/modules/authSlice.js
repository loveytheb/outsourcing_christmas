import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const __isLogin = createAsyncThunk(
  //action value
  "isLogin",
  //callback
  (payload, thunkAPI) => {
    thunkAPI.dispatch(isLogin(payload));
  }
);

const initialState = {
  isLogined: false,
  userId: "",
};

const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    isLogin: (state, action) => {
      console.log("auth: ", action.payload);
      return action.payload;
    },
  },
});

export const { isLogin } = usersSlice.actions;
export default usersSlice.reducer;
