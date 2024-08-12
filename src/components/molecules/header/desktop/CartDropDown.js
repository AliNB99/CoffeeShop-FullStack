import Button from "@/atoms/Button";
import CartProductBasket from "@/organisms/common/CartProductBasket";
import { sp } from "@/utils/helper/replaceNumber";
import { ChevronLeftIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import { Divider } from "@nextui-org/react";
import Link from "next/link";
import { useSelector } from "react-redux";

function CartDropDown() {
  const { selectedItems, counterItems, totalPrice } = useSelector(
    (state) => state.cart
  );
  return (
    <div className="absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible top-full left-0 w-[450px] h-[410px] p-5 shadow-lg rounded-2xl border-t-2 border-orange-300 bg-white dark:bg-zinc-700 transition-all">
      {selectedItems.length ? (
        <div>
          <div className="flex items-center justify-between font-medium  text-xs mb-2">
            <span className="text-zinc-300">{counterItems}مورد</span>
            <Link className="flex items-center text-orange-300" href="/cart">
              مشاهده سبد خرید
              <ChevronLeftIcon />
            </Link>
          </div>
          <div className="flex flex-col gap-5 h-64 overflow-auto no-scrollbar">
            {selectedItems.map((p, index) => (
              <>
                <CartProductBasket product={p} />
                {index + 1 < selectedItems.length && <Divider />}
              </>
            ))}
          </div>
          <div className="p-3 flex items-center justify-between border-t border-gray-300 dark:border-white/10 mt-5 pb-3">
            <Button color="text-white" bgColor="bg-teal-600">
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
      ) : (
        <div className="h-full w-full flex flex-col items-center justify-center gap-5">
          <ShoppingBagIcon className="w-14 h-14 text-zinc-300 dark:text-white/40" />
          <p className="tracking-tightest font-bold text-base text-zinc-700 dark:text-white/80">
            هنوز محصولی به سبد خرید اضافه نشده
          </p>
          <Button color="text-white" bgColor="bg-teal-600">
            مشاهده صفحه فروشگاه
          </Button>
        </div>
      )}
    </div>
  );
}

export default CartDropDown;
