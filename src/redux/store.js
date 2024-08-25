import CartReducer from "@/redux/features/cart/CartSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    cart: CartReducer,
  },
});

export default store;
