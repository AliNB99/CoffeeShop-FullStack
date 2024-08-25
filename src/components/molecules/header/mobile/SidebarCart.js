"use client";

import CardProductBasket from "@/organisms/common/CardProductBasket";
import { ShoppingBagIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { sp } from "@/utils/helper/replaceNumber";
import { useSelector } from "react-redux";
import Link from "next/link";

function SidebarCart({ showElement, onShowElement }) {
  const { selectedItems, finalPrice } = useSelector((state) => state.cart);

  return (
    <nav
      className={`fixed ${
        showElement.cartSidebar ? "left-0" : "-left-80"
      } top-0 bottom-0 p-4 bg-white dark:bg-zinc-700 w-80 overflow-y-hidden z-30 transition-all`}
    >
      <div className="flex items-center justify-between pb-5 mb-2 border-b border-gray-200 dark:border-b-white/20">
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
        <div className="h-full flex flex-col justify-between pb-36">
          <div className="overflow-scroll no-scrollbar space-y-3">
            {selectedItems.map((p, index) => (
              <CardProductBasket
                list={selectedItems}
                key={index}
                index={index}
                product={p}
              />
            ))}
          </div>
          <div className="absolute bottom-0 left-0 w-full bg-white dark:bg-zinc-700 p-3 mt-5">
            <div className="flex items-center justify-between border-t-2 dark:border-zinc-600 p-3">
              <Link
                href="/dashboard/cart"
                className="flex items-center justify-center rounded-lg px-3 text-white h-10 bg-teal-600 hover:bg-teal-500 text-sm"
              >
                ثبت سفارش
              </Link>
              <div>
                <span className="text-zinc-400 text-xs">مبلغ قابل پرداخت</span>
                <div>
                  <span>{sp(finalPrice)}</span>
                  <span className="text-xs">تومان</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default SidebarCart;
