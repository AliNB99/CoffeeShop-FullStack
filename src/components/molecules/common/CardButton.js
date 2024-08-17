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

function CardButton({ data, disabled }) {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const quantity = productCount(cart, data._id);

  const clickHandler = (e, action) => {
    e.stopPropagation();

    dispatch(action(data));
  };

  return (
    <div className="flex items-center gap-4">
      {quantity === 0 ? (
        <button
          disabled={disabled}
          onClick={(e) => clickHandler(e, addItem)}
          className="cart-btn group/button"
        >
          <ShoppingCartIcon className="w-4 h-4 md:w-6 md:h-6 text-gray-400 group-hover/button:text-white transition-all" />
        </button>
      ) : (
        <button
          disabled={disabled}
          onClick={(e) => clickHandler(e, increase)}
          className="cart-btn group/button"
        >
          <PlusIcon className="w-4 h-4 md:w-6 md:h-6 text-gray-400 group-hover/button:text-white transition-all" />
        </button>
      )}
      <span className="text-orange-300">{!!quantity && quantity}</span>
      {quantity === 1 && (
        <button
          disabled={disabled}
          onClick={(e) => clickHandler(e, removeItem)}
          className="cart-btn group/button"
        >
          <TrashIcon className="w-4 h-4 md:w-6 md:h-6 text-gray-400 group-hover/button:text-white transition-all" />
        </button>
      )}
      {quantity > 1 && (
        <button
          disabled={disabled}
          onClick={(e) => clickHandler(e, decrease)}
          className="cart-btn group/button"
        >
          <MinusIcon className="w-4 h-4 md:w-6 md:h-6 text-gray-400 group-hover/button:text-white transition-all" />
        </button>
      )}
    </div>
  );
}

export default CardButton;
