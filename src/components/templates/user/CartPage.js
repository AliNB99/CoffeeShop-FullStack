"use client";

import CardProductBasket from "@/organisms/common/CardProductBasket";
import { isCheckout } from "@/redux/features/cart/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { listUserInfo } from "@/constants/dashboard";
import { sp } from "@/utils/helper/replaceNumber";
import { listCheckout } from "@/constants/other";
import useLoading from "src/hooks/useLoading";
import TitlePage from "@/atoms/TitlePage";
import { User } from "@nextui-org/react";
import Button from "@/atoms/Button";
import Loader from "@/atoms/Loader";
import toast from "react-hot-toast";
import { useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  PencilSquareIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

function CartPage({ user }) {
  const { isLoading, startLoading, stopLoading } = useLoading();
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const checkoutHandler = () => {
    if (!user.phone || !user.bankInfo || !user.postalCode || !user.address) {
      return toast.error("لطفا اطلاعات کاربری خود را تکمیل کنید");
    }
    startLoading();
    setTimeout(() => {
      dispatch(isCheckout());
      stopLoading();
      toast.success("خرید شما با موفقیت انجام شد");
    }, [1000]);
  };

  return (
    <div className="dashboard-page">
      <TitlePage color="text-blue-500" borderColor="border-blue-500">
        سبد خرید
      </TitlePage>
      {!!cart.selectedItems.length ? (
        <div className="flex flex-col-reverse md:flex-row gap-5 mt-5">
          <div className="w-full h-fit flex flex-col gap-3 bg-white dark:bg-zinc-700 p-3 shadow-medium rounded-lg">
            <h1 className="w-1/2 text-orange-300 text-sm font-bold border-b-2 border-orange-300 px-1 pb-2">
              محصولات انتخابی شما
            </h1>
            {cart.selectedItems.map((p, index) => (
              <div
                key={index}
                className="border-2 dark:border-zinc-600 p-2 rounded-lg"
              >
                <CardProductBasket product={p} cartPage />
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-3 lg:gap-2">
            <div className="min-w-80 space-y-5 h-fit border-2 dark:border-zinc-700 p-4 bg-white dark:bg-zinc-700 rounded-lg shadow-medium">
              {listCheckout.map((i, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
                    <span className="text-orange-300">{i.icon}</span>
                    <span className="text-xs md:text-sm font-bold">
                      {i.title}
                    </span>
                  </div>
                  <span>{sp(cart[i.keyValue])}</span>
                </div>
              ))}
              {isLoading ? (
                <Loader size={10} color="#22C55E" />
              ) : (
                <Button
                  clickHandler={checkoutHandler}
                  width="w-full"
                  height="h-10"
                  fontSize="text-base"
                  color="text-green-500"
                  bgColor="bg-green-100"
                >
                  تکمیل سفارش
                </Button>
              )}
            </div>
            <div className="min-w-80 space-y-4 h-fit border-2 dark:border-zinc-700 p-4 bg-white dark:bg-zinc-700 rounded-lg shadow-medium">
              <div className="w-full flex items-center justify-between">
                <h4 className="font-bold text-orange-300">مشخصات</h4>
                <Link
                  className="hover:bg-zinc-200 dark:hover:bg-zinc-800 p-2 rounded-lg transition-all"
                  href="/dashboard"
                >
                  <PencilSquareIcon />
                </Link>
              </div>
              {listUserInfo.map((item, index) => (
                <div key={index} className="flex flex-col">
                  <div className="font-bold text-orange-300 flex items-center gap-2">
                    {item.icon}
                    <h4 className="font-bold text-black dark:text-zinc-200 text-sm">
                      {item.title}
                    </h4>
                  </div>
                  <span className="pr-6 text-zinc-700/70 dark:text-zinc-400">
                    {user[item.name] ? user[item.name] : "-"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="h-96 mt-10 flex flex-col items-center justify-center gap-7">
          <div className="flex flex-col items-center justify-center">
            <Image src="/images/empty-cart.png" width={200} height={200} />
            <h1 className="font-bold text-sm md:text-base text-zinc-600 dark:text-zinc-100">
              هیچ محصولی در سبد خرید شما موجود نیست!!
            </h1>
          </div>
          <Link
            href="/products"
            className="bg-blue-100 text-blue-500 p-3 rounded-xl font-bold flex items-center justify-center gap-3"
          >
            <ShoppingCartIcon />
            رفتن به صفحه محصولات
          </Link>
        </div>
      )}
    </div>
  );
}

export default CartPage;
