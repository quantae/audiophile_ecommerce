import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    clickStatus: false,
}

// create buttonSlice for the store
export const buttonSlice = createSlice({
    name: "buttonTest",
    initialState,
    reducers: {
        clickButton: (state) => {
            state.clickStatus = !state.clickStatus;
            console.log("clickStatus: ", state.clickStatus);
        }
    }
})


// crate selector to access state in other components
export const selectClickStatus = state => state.buttonTest.clickStatus;

// export the action reducers
export const { clickButton } = buttonSlice.actions;

// export the state
export default buttonSlice.reducer;