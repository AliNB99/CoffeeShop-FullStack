"use client";

import Button from "@/atoms/Button";
import CartProductBasket from "@/organisms/common/CartProductBasket";
import { sp } from "@/utils/helper/replaceNumber";
import { ShoppingBagIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Divider } from "@nextui-org/react";
import { useSelector } from "react-redux";

function SidebarCart({ showElement, onShowElement }) {
  const { selectedItems, counterItems, totalPrice } = useSelector(
    (state) => state.cart
  );

  return (
    <nav
      className={`fixed ${
        showElement.cartSidebar ? "left-0" : "-left-80"
      } top-0 bottom-0 p-4 bg-white dark:bg-zinc-700 w-80 overflow-y-auto z-30 transition-all`}
    >
      <div className="flex items-center justify-between pb-5 mb-5 border-b border-gray-200 dark:border-b-white/20">
        <button
          onClick={() => onShowElement({ element: "cartSidebar" })}
          className="bg-zinc-100 dark:bg-zinc-600/50 rounded-full p-1 transition-all"
        >
          <XMarkIcon className="text-zinc-600 dark:text-white" />
        </button>
        <h4 className="font-medium">سبد خرید</h4>
      </div>
      {!selectedItems.length ? (
        <div className="h-96 flex flex-col items-center justify-center gap-3">
          <ShoppingBagIcon className="size-10 text-zinc-400" />
          <p className="text-xs font-medium">
            هنوز محصولی به سبد خرید اضافه نشده
          </p>
        </div>
      ) : (
        <div className="h-full flex flex-col justify-between">
          <div className="overflow-scroll no-scrollbar space-y-3">
            {selectedItems.map((p, index) => (
              <>
                <CartProductBasket product={p} />
                {index + 1 < selectedItems.length && <Divider />}
              </>
            ))}
          </div>
          <div className="p-3 flex items-center justify-between border-t border-gray-300 dark:border-white/10 mt-5 pb-3">
            <Button
              height="h-10"
              color="text-white"
              bgColor="bg-teal-600"
              fontSize="text-sm"
            >
              ثبت سفارش
            </Button>
            <div>
              <span className="text-zinc-400 text-xs">مبلغ قابل پرداخت</span>
              <div>
                <span>{sp(totalPrice)}</span>
                <span className="text-xs">تومان</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default SidebarCart;
