import { counterTotal } from "@/utils/helper/helper";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedItems: [],
  counterItems: 0,
  totalPrice: 0,
  totalDiscount: 0,
  finalPrice: 0,
  isCheckout: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      if (!state.selectedItems.find((p) => p._id === action.payload._id)) {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
        state.isCheckout = false;
        state.counterItems = counterTotal({ state, type: "totalItem" });
        state.totalPrice = counterTotal({ state, type: "totalPrice" });
        state.totalDiscount = counterTotal({ state, type: "totalDiscount" });
        state.finalPrice = counterTotal({ state, type: "finalPrice" });
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
      state.totalDiscount = counterTotal({ state, type: "totalDiscount" });
      state.finalPrice = counterTotal({ state, type: "finalPrice" });
      localStorage.setItem("cart", JSON.stringify(state));
    },

    increase: (state, action) => {
      const index = state.selectedItems.findIndex(
        (p) => p._id === action.payload._id
      );
      state.selectedItems[index].quantity++;
      state.counterItems = counterTotal({ state, type: "totalItem" });
      state.totalPrice = counterTotal({ state, type: "totalPrice" });
      state.totalDiscount = counterTotal({ state, type: "totalDiscount" });
      state.finalPrice = counterTotal({ state, type: "finalPrice" });
      localStorage.setItem("cart", JSON.stringify(state));
    },

    decrease: (state, action) => {
      const index = state.selectedItems.findIndex(
        (p) => p._id === action.payload._id
      );
      state.selectedItems[index].quantity--;
      state.counterItems = counterTotal({ state, type: "totalItem" });
      state.totalPrice = counterTotal({ state, type: "totalPrice" });
      state.totalDiscount = counterTotal({ state, type: "totalDiscount" });
      state.finalPrice = counterTotal({ state, type: "finalPrice" });
      localStorage.setItem("cart", JSON.stringify(state));
    },

    isCheckout: (state) => {
      state.selectedItems = [];
      state.counterItems = 0;
      state.totalPrice = 0;
      state.totalDiscount = 0;
      state.finalPrice = 0;
      state.isCheckout = true;
      localStorage.setItem("cart", JSON.stringify(state));
    },
    setCart: (state, action) => {
      state.selectedItems = action.payload.selectedItems;
      state.counterItems = action.payload.counterItems;
      state.totalPrice = action.payload.totalDiscount;
      state.totalDiscount = action.payload.totalDiscount;
      state.finalPrice = action.payload.finalPrice;
      state.isCheckout = action.payload.isCheckout;

      if (action.payload) {
        localStorage.setItem("cart", JSON.stringify(state));
      } else {
        localStorage.remove("cart");
      }
    },
  },
});

export default cartSlice.reducer;
export const { addItem, removeItem, increase, decrease, isCheckout, setCart } =
  cartSlice.actions;
