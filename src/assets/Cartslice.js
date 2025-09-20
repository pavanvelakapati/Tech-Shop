// src/assets/Cartslice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += 1; // increment if already exists
      } else {
        state.cartItems.push({ ...product, quantity: 1 });
      }
    },

    increment: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },

    decrement: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload);
      if (item) {
        item.quantity -= 1;
        if (item.quantity <= 0) {
          state.cartItems = state.cartItems.filter((i) => i.id !== action.payload);
        }
      }
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((i) => i.id !== action.payload);
    },
  },
});

export const { addToCart, increment, decrement, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;