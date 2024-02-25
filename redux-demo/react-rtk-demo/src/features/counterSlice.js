import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};
const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increament: (state) => {
      state.count += 1;
    },
    decreament: (state) => {
      state.count -= 1;
    },
    increamentByAmount: (state, action) => {
      console.log(action);
      state.count += Number(action.payload);
    },
    decreamentByCount: (state, action) => {
      state.count -= Number(action.payload);
    },
  },
});

export default counterSlice.reducer;
export const { increament, decreament, increamentByAmount, decreamentByCount } =
  counterSlice.actions;
