import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "userCart",
  initialState: {
    isLogin: false,
    basket: [],
  },
  reducers: {
    addToBasket: (state, action) => {
      // state.isLogin = true;
      state.basket.push(action.payload);
    },
    // removeFromCart: (state, action) => {
    //   state.basket = "";
    // }, 
  },
});

export const { addToBasket } = cartSlice.actions;
export default cartSlice.reducer;
