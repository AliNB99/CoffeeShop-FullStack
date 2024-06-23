import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedItems: [],
  counterItems: 0,
  totalPrice: 0,
  checkOut: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      if (!state.selectedItems.find((p) => p._id === action.payload._id)) {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
        state.checkOut = false;
        // state.counterItems = counterItems(state);
        // state.totalPrice = counterTotal(state);
      }
    },

    removeItem: (state, action) => {
      const newSelectedItems = state.selectedItems.filter(
        (p) => p._id !== action.payload._id
      );

      state.selectedItems = newSelectedItems;
      // state.counterItems = counterItems(state);
      // state.totalPrice = counterTotal(state);
    },

    increase: (state, action) => {
      const index = state.selectedItems.findIndex(
        (p) => p._id === action.payload._id
      );
      state.selectedItems[index].quantity++;
      // state.counterItems = counterItems(state);
      // state.totalPrice = counterTotal(state);
    },

    decrease: (state, action) => {
      const index = state.selectedItems.findIndex(
        (p) => p._id === action.payload._id
      );
      state.selectedItems[index].quantity--;
      // state.counterItems = counterItems(state);
      // state.totalPrice = counterTotal(state);
    },

    checkOut: (state) => {
      state.selectedItems = [];
      state.counterItems = 0;
      state.totalPrice = 0;
      state.checkOut = true;
    },
  },
});

export default cartSlice.reducer;
export const { addItem, removeItem, increase, decrease, checkOut } =
  cartSlice.actions;
