import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "@/redux/features/cart/CartSlice";

const store = configureStore({
  reducer: {
    cart: CartReducer,
  },
});

export default store;
