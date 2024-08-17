"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCart } from "@/redux/features/cart/CartSlice";
import useIsClient from "src/hooks/useIsClient";

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
