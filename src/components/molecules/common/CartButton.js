"use client";

import {
  MinusIcon,
  PlusIcon,
  ShoppingCartIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  removeItem,
  increase,
  decrease,
} from "@/redux/features/cart/CartSlice";
import { productCount } from "@/utils/helper/helper";

function CartButton({ data }) {
  const store = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const quantity = productCount(store, data._id);


  const clickHandler = (e, type) => {
    e.stopPropagation();
    dispatch(type(data));
  };
  
  return (
    <div className="flex items-center gap-4">
      {quantity === 0 ? (
        <button
          onClick={(e) => clickHandler(e, addItem)}
          className="cart-btn group"
        >
          <ShoppingCartIcon className="w-4 h-4 md:w-6 md:h-6 text-gray-400 group-hover:text-white transition-all" />
        </button>
      ) : (
        <button
          onClick={(e) => clickHandler(e, increase)}
          className="cart-btn group"
        >
          <PlusIcon className="w-4 h-4 md:w-6 md:h-6 text-gray-400 group-hover:text-white transition-all" />
        </button>
      )}
      <span className="text-orange-300">{!!quantity && quantity}</span>
      {quantity === 1 && (
        <button
          onClick={(e) => clickHandler(e, removeItem)}
          className="cart-btn group"
        >
          <TrashIcon className="w-4 h-4 md:w-6 md:h-6 text-gray-400 group-hover:text-white transition-all" />
        </button>
      )}
      {quantity > 1 && (
        <button
          onClick={(e) => clickHandler(e, decrease)}
          className="cart-btn group"
        >
          <MinusIcon className="w-4 h-4 md:w-6 md:h-6 text-gray-400 group-hover:text-white transition-all" />
        </button>
      )}
    </div>
  );
}

export default CartButton;
