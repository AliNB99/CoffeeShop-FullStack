import { sp } from "@/utils/helper/replaceNumber";
import {
  CheckBadgeIcon,
  RocketLaunchIcon,
  ShoppingCartIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";
import { Logo } from "@/utils/svg";
import ItemSeller from "./ItemSeller";
import Button from "@/atoms/Button";

function CartDetails({ discount, price }) {
  return (
    <div className="bg-white border-2 dark:border-zinc-700 dark:bg-zinc-800 w-full lg:w-72 flex flex-col justify-between rounded-2xl p-4">
      <div className="divide-y-2 dark:divide-zinc-700">
        <div className="flex flex-col gap-3 pb-4">
          <h4 className="font-bold">فروشنده</h4>
          <ItemSeller icon={<Logo className="text-orange-300" />}>
            گلدن کافه (Golden Coffee)
          </ItemSeller>
          <ItemSeller icon={<CheckBadgeIcon className="text-green-400" />}>
            گارانتی اصالت و سلامت فیزیکی کالا
          </ItemSeller>
        </div>
        <div className="p-2 lg:py-4 flex flex-col items-end gap-2">
          <div className="pt-2">
            <span className="text-2xl font-bold">
              {discount ? sp((price * (discount - 100)) / 100) : sp(price)}
            </span>
            <span className="mr-1">تومان</span>
          </div>
          <div>
            {!!discount && (
              <div className="flex items-center gap-3">
                <div className="offer">
                  <span className="font-bold text-sm md:text-lg">
                    {sp(price)}
                  </span>
                  <span className="text-xs md:text-base mr-1">تومان</span>
                </div>
                <span className="bg-red-400 px-4 py-1 text-white text-sm rounded-2xl">
                  {discount}%
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="py-4 space-y-2">
          <ItemSeller icon={<TruckIcon className="text-blue-400" />}>
            ارسال سریع سوپرمارکتی کافی گلد
          </ItemSeller>
          <ItemSeller icon={<RocketLaunchIcon className="text-red-400" />}>
            ارسال امروز (فعلا در شهر تهران و کرج)
          </ItemSeller>
        </div>
      </div>
      <Button
        fontSize="text-base"
        type="button"
        color="text-white"
        bgColor="bg-teal-600"
      >
        <ShoppingCartIcon />
        <span>افزودن به سبد خرید</span>
      </Button>
    </div>
  );
}

export default CartDetails;
