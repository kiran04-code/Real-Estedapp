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
            state.Loading = true;
        },
        deleteStart: (state) => {
            state.Loading = true;
        },
        deleteSuccess: (state, action) => {
            state.Loading = false;
            state.currentUser = null;
        },
        deleteFail: (state) => {
            state.Loading = true;
        },
       signoutStart: (state) => {
            state.Loading = true;
        },
       signoutSuccess: (state) => {
            state.Loading = false;
            state.currentUser = null;
        },
       signoutFail: (state) => {
            state.Loading = true;
        },
    },
});

export const { signinStart, signinSuccess, signinFail , deleteStart ,deleteFail,deleteSuccess,signoutStart,signoutSuccess,signoutFail } = userSlice.actions;
export default userSlice.reducer;
