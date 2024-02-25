import { configureStore } from "@reduxjs/toolkit";
import cakeSlice from "../features/cakeSlice";
import icecreamSlice from "../features/icecreamSlice";
import cartSlice from "../features/cartSlice";
import counterSlice from "../features/counterSlice"; // naming as reducer
const store = configureStore({
  reducer: {
    cake: cakeSlice,
    icecream: icecreamSlice,
    cart: cartSlice,
    counter: counterSlice,
  },
});

export default store;
