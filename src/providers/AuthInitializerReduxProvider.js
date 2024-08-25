"use client";

import { setCart } from "@/redux/features/cart/CartSlice";
import useIsClient from "src/hooks/useIsClient";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function AuthInitializerReduxProvider({ children }) {
  const dispatch = useDispatch();
  const isClient = useIsClient();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const items = localStorage.getItem("cart");

      if (items) {
        dispatch(setCart(JSON.parse(items)));
      }
    }
  }, [dispatch]);

  return isClient && children;
}

export default AuthInitializerReduxProvider;
