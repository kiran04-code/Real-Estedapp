import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    currentUser:null,
    Loading:null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        signinStart: (state) => {
            state.Loading = true;
        },
        signinSuccess: (state, action) => {
            state.Loading = false;
            state.currentUser = action.payload;
        },
        signinFail: (state) => {
            state.Loading = false;
        },
    },
});

export const { signinStart, signinSuccess, signinFail } = userSlice.actions;
export default userSlice.reducer;
