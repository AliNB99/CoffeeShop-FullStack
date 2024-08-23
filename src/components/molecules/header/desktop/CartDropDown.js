import Link from "next/link";
import Button from "@/atoms/Button";
import { useSelector } from "react-redux";
import { sp } from "@/utils/helper/replaceNumber";
import { ChevronLeftIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import CardProductBasket from "@/organisms/common/CardProductBasket";

function CartDropDown() {
  const { selectedItems, counterItems, finalPrice } = useSelector(
    (state) => state.cart
  );
  return (
    <div className="absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible top-full left-0 w-[450px] max-h-[410px] p-5 shadow-lg rounded-2xl border-t-2 border-orange-300 bg-white dark:bg-zinc-700 transition-all">
      {selectedItems.length ? (
        <div>
          <div className="flex items-center justify-between font-medium text-xs mb-2">
            <span className="text-zinc-300">{counterItems}مورد</span>
            <Link
              className="flex items-center text-orange-300"
              href="/dashboard/cart"
            >
              مشاهده سبد خرید
              <ChevronLeftIcon />
            </Link>
          </div>
          <div className="flex flex-col gap-5 max-h-64 overflow-auto no-scrollbar">
            {selectedItems.map((p, index) => (
              <CardProductBasket
                key={index}
                index={index}
                list={selectedItems}
                product={p}
              />
            ))}
          </div>
          <div className="p-3 flex items-center justify-between border-t border-gray-300 dark:border-white/10 mt-5 pb-3">
            <Link
              href="/dashboard/cart"
              className="flex items-center justify-center rounded-lg px-5 text-white h-12 bg-teal-600 hover:bg-teal-500 text-base"
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
      ) : (
        <div className="h-full w-full flex flex-col items-center justify-center gap-5 px-10 py-8">
          <ShoppingBagIcon className="w-14 h-14 text-zinc-300 dark:text-white/40" />
          <p className="tracking-tightest font-bold text-base text-zinc-700 dark:text-white/80">
            هنوز محصولی به سبد خرید اضافه نشده
          </p>
          <Link
            href="/products"
            className="text-white bg-teal-600 text-lg px-3 py-2 rounded-lg"
          >
            مشاهده صفحه فروشگاه
          </Link>
        </div>
      )}
    </div>
  );
}

export default CartDropDown;
