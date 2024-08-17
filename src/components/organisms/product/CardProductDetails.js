import { sp } from "@/utils/helper/replaceNumber";
import {
  CheckBadgeIcon,
  RocketLaunchIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";

import { StarIcon } from "@heroicons/react/24/solid";

import { Logo } from "@/utils/svg";
import StoreFeatures from "../../molecules/product/StoreFeatures";
import CardButton from "@/molecules/common/CardButton";

function CardProductDetails({ product }) {
  const { discount, price, quantity } = product;
  return (
    <div className="bg-white border-2 dark:border-zinc-700 dark:bg-zinc-700/60 w-full lg:w-72 flex flex-col justify-between rounded-2xl p-4">
      <div className="divide-y-2 dark:divide-zinc-700">
        <div className="flex flex-col gap-3 pb-4">
          <h4 className="font-bold">فروشنده</h4>
          <StoreFeatures icon={<Logo className="text-orange-300" />}>
            گلدن کافه (Golden Coffee)
          </StoreFeatures>
          <StoreFeatures icon={<CheckBadgeIcon className="text-green-400" />}>
            گارانتی اصالت و سلامت فیزیکی کالا
          </StoreFeatures>
        </div>
        <div className="p-2 lg:py-4 flex flex-col items-end gap-2">
          {quantity > 0 ? (
            <>
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
            </>
          ) : (
            <div className="w-full py-3 text-center">
              <h1 className="text-red-400 text-xl font-bold">
                متاسفانه فعلا موجود نیست
              </h1>
            </div>
          )}
        </div>
        <div className="py-4 space-y-2">
          <StoreFeatures icon={<TruckIcon className="text-blue-400" />}>
            ارسال سریع سوپرمارکتی کافی گلد
          </StoreFeatures>
          <StoreFeatures icon={<RocketLaunchIcon className="text-red-400" />}>
            ارسال امروز (فعلا در شهر تهران و کرج)
          </StoreFeatures>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <CardButton data={product} />
        <div className="flex gap-1 text-yellow-500">
          <span className="text-xs md:text-lg">2.5</span>
          <StarIcon className="w-3 h-3 md:w-5 md:h-5" />
        </div>
      </div>
    </div>
  );
}

export default CardProductDetails;
