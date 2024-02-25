import { createSlice } from "@reduxjs/toolkit";

const cartInitialState = {
  items: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    add: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export default cartSlice.reducer;
export const cartAction = cartSlice.actions;
