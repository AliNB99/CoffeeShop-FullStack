import { counterTotal } from "@/utils/helper/helper";
import { createSlice } from "@reduxjs/toolkit";

const items = localStorage.getItem("cart");

const initialState = {
  selectedItems: [],
  counterItems: 0,
  totalPrice: 0,
  isCheckout: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: items ? JSON.parse(items) : initialState,
  reducers: {
    addItem: (state, action) => {
      if (!state.selectedItems.find((p) => p._id === action.payload._id)) {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
        state.isCheckout = false;
        state.counterItems = counterTotal({ state, type: "totalItem" });
        state.totalPrice = counterTotal({ state, type: "totalPrice" });
        localStorage.setItem("cart", JSON.stringify(state));
      }
    },

    removeItem: (state, action) => {
      const newSelectedItems = state.selectedItems.filter(
        (p) => p._id !== action.payload._id
      );

      state.selectedItems = newSelectedItems;
      state.counterItems = counterTotal({ state, type: "totalItem" });
      state.totalPrice = counterTotal({ state, type: "totalPrice" });
      localStorage.setItem("cart", JSON.stringify(state));
    },

    increase: (state, action) => {
      const index = state.selectedItems.findIndex(
        (p) => p._id === action.payload._id
      );
      state.selectedItems[index].quantity++;
      state.counterItems = counterTotal({ state, type: "totalItem" });
      state.totalPrice = counterTotal({ state, type: "totalPrice" });
      localStorage.setItem("cart", JSON.stringify(state));
    },

    decrease: (state, action) => {
      const index = state.selectedItems.findIndex(
        (p) => p._id === action.payload._id
      );
      state.selectedItems[index].quantity--;
      state.counterItems = counterTotal({ state, type: "totalItem" });
      state.totalPrice = counterTotal({ state, type: "totalPrice" });
      localStorage.setItem("cart", JSON.stringify(state));
    },

    isCheckout: (state) => {
      state.selectedItems = [];
      state.counterItems = 0;
      state.totalPrice = 0;
      state.isCheckout = true;
    },
  },
});

export default cartSlice.reducer;
export const { addItem, removeItem, increase, decrease, isCheckout } =
  cartSlice.actions;
