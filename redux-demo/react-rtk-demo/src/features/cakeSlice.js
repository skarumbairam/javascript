import { createSlice } from "@reduxjs/toolkit";

const initCakeState = {
  noOfCakes: 20,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState: initCakeState,
  reducers: {
    ordered: (state, action) => {
      state.noOfCakes--;
    },
    restocked: (state, action) => {
      state.noOfCakes += action.payload;
    },
  },
});

export default cakeSlice.reducer;
export const cakeActions = cakeSlice.actions;
