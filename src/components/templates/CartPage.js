"use client";

import CardProductBasket from "@/organisms/common/CardProductBasket";
import BuyerInformation from "@/organisms/cart/BuyerInformation";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import CheckOutInfo from "@/organisms/cart/CheckOutInfo";
import { useSelector } from "react-redux";
import TitlePage from "@/atoms/TitlePage";
import Image from "next/image";
import Link from "next/link";
import SelectedProductsList from "@/organisms/cart/SelectedProductsList";

function CartPage({ user }) {
  const cart = useSelector((state) => state.cart);
  return (
    <div className="space-top h-full">
      <TitlePage color="text-blue-500" borderColor="border-blue-500">
        سبد خرید
      </TitlePage>
      {!!cart.selectedItems.length ? (
        <div className="flex flex-col-reverse md:flex-row gap-5 mt-8">
          <SelectedProductsList cart={cart} />
          <div className="flex flex-col gap-3 lg:gap-2">
            <CheckOutInfo user={user} cart={cart} />
            <BuyerInformation user={user} />
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
