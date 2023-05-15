import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productsInCart: [],
  sumOfAllItems: 0,
  totalBill: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const productFoundInCart = state.productsInCart.filter(
        (obj) => obj.id === action.payload.id
      )[0];
      console.log(productFoundInCart);
      const pricePerUnit = Number(action.payload.pricePerUnit);
      const itemsAmount = Number(action.payload.itemsAmount);
      const newRevenue = pricePerUnit * itemsAmount;
      state.totalBill += newRevenue;
      state.sumOfAllItems += itemsAmount;
      if (!productFoundInCart) {
        const newItem = {
          id: action.payload.id,
          amount: action.payload.itemsAmount,
          bill: newRevenue,
        };
        state.productsInCart.push(newItem);
      } else {
        productFoundInCart.amount += itemsAmount;
        productFoundInCart.bill += newRevenue;
      }
    },

    removeFromCart(state, action) {
      const productId = action.payload.id;
      state.productsInCart = state.productsInCart.filter(
        (item) => item.id !== productId
      );
    },

    resetNumOfItems(state) {
      state.sumOfAllItems = 0;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
