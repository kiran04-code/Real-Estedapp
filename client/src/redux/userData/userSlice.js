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
    },
});

export const { signinStart, signinSuccess, signinFail , deleteStart , deleteFail, deleteSuccess } = userSlice.actions;
export default userSlice.reducer;
