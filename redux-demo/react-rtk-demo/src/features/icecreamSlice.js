import { createSlice } from "@reduxjs/toolkit";
import { cakeActions } from "./cakeSlice";

const initIcecreamState = {
  noOfIcecream: 10,
};

const icecreamSlice = createSlice({
  name: "icecream",
  initialState: initIcecreamState,
  reducers: {
    ordered: (state, action) => {
      state.noOfIcecream--;
    },
    restocked: (state, action) => {
      state.noOfIcecream += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(cakeActions.ordered, (state) => {
      state.noOfIcecream--;
    });
  },
});

export default icecreamSlice.reducer;
export const icecreamActions = icecreamSlice.actions;
