"use client";

import Button from "@/atoms/Button";
import TitlePage from "@/atoms/TitlePage";
import { listCheckout } from "@/constants/other";
import CardProductBasket from "@/organisms/common/CardProductBasket";
import { sp } from "@/utils/helper/replaceNumber";
import { useSelector } from "react-redux";

function CartPage() {
  const cart = useSelector((state) => state.cart);

  const checkoutHandler = () => {
    
  }

  return (
    <div className="dashboard-page">
      <TitlePage color="text-blue-500" borderColor="border-blue-500">
        سبد خرید
      </TitlePage>
      {!!cart.selectedItems.length ? (
        <div className="flex flex-col-reverse md:flex-row gap-3 mt-5">
          <div className="w-full h-fit flex flex-col gap-3 bg-white dark:bg-zinc-700 p-3 shadow-medium rounded-lg">
            <h1 className="w-1/2 text-orange-300 text-sm font-bold border-b-2 border-orange-300 px-1 pb-2">
              محصولات انتخابی شما
            </h1>
            {cart.selectedItems.map((p) => (
              <div className="border-2 dark:border-zinc-600 p-2 rounded-lg">
                <CardProductBasket product={p} cartPage />
              </div>
            ))}
          </div>
          <div className="min-w-80 space-y-5 h-fit border-2 dark:border-zinc-700 p-4 bg-white dark:bg-zinc-700 rounded-lg shadow-medium">
            {listCheckout.map((i) => (
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
                  <span className="text-orange-300">{i.icon}</span>
                  <span className="text-xs md:text-sm font-bold">
                    {i.title}
                  </span>
                </div>
                <span>{sp(cart[i.keyValue])}</span>
              </div>
            ))}
            <Button
              width="w-full"
              height="h-10"
              fontSize="text-base"
              color="text-green-500"
              bgColor="bg-green-100"
            >
              تکمیل سفارش
            </Button>
          </div>
        </div>
      ) : (
        <div>empty</div>
      )}
    </div>
  );
}

export default CartPage;
