import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    currentUser: null,
}

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            const currentUser = state.users.find((user) => user.uid === action.payload)
            return {...state, currentUser: currentUser ? currentUser : null};
        }
    }
});

export const { setUserLogin } = usersSlice.actions;
export default usersSlice.reducer;