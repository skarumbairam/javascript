import { configureStore } from "@reduxjs/toolkit";
import cakeSlice from "../features/cakeSlice";
import icecreamSlice from "../features/icecreamSlice";
import cartSlice from "../features/cartSlice";
const store = configureStore({
  reducer: {
    cake: cakeSlice,
    icecream: icecreamSlice,
    cart: cartSlice,
  },
});

export default store;
