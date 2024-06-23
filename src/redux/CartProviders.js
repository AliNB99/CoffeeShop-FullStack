"use client";

import { Provider } from "react-redux";
import store from "./store";

function CartProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}

export default CartProvider;
