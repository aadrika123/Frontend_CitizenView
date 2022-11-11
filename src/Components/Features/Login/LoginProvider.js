import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { isLoggedIn: false };

export const loginSlice = createSlice({
    name: "user",
    initialState: { value: initialStateValue },

    reducers: {
        LOGIN: (state, action) => {
            state.value = action.payload
        },

        LOGOUT: (state) => {
            state.value = initialStateValue;
        }
    }
})

export const { LOGIN, LOGOUT } = loginSlice.actions;

export default loginSlice.reducer;