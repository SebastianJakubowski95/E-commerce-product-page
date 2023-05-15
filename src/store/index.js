import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./modal-slice";
import cartSlice from "./cart-slice";

const store = configureStore({
  reducer: {
    modal: modalSlice,
    cart: cartSlice,
  },
});

export default store;
