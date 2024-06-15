"use client";

import { sp } from "@/utils/helper/replaceNumber";
import { LogoType } from "@/utils/svg";
import { ShoppingCartIcon, StarIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

function CartProduct({ title, price, images, discount, id }) {
  return (
    <Link
      href={`/products/${id}/${title.split(" ").join("-")}`}
      className="rounded-2xl bg-white dark:bg-zinc-700 p-2 md:p-5 hover:shadow-medium dark:hover:shadow-zinc-500 transition-all"
    >
      <div className="relative flex justify-center">
        {images.length ? (
          <Image
            src={images[0]}
            className="w-32 h-32 lg:w-64 lg:h-64 rounded-2xl"
            width={300}
            height={300}
            loading="lazy"
            alt="product image"
          />
        ) : (
          <div>
            <LogoType className="w-fit h-32 lg:w-52 lg:h-64 opacity-20" />
          </div>
        )}
        {!!discount && (
          <span className="absolute top-0 right-0 bg-orange-300 px-3 lg:px-4 py-1 rounded-full font-bold text-white text-xs lg:text-base dark:text-zinc-700">
            {discount}%
          </span>
        )}
      </div>
      <div className="mt-5 space-y-2.5">
        <h3 className="font-DanaMedium text-sm md:text-xl h-10 md:h-14 text-zinc-700 dark:text-white line-clamp-2">
          {title}
        </h3>
        <div className="flex items-center gap-2.5">
          <div className="text-base md:text-xl text-teal-600 dark:text-emerald-500">
            <span className="font-bold">
              {discount ? sp((price * (discount - 100)) / 100) : sp(price)}
            </span>
            <span className="text-xs md:text-base mr-1">تومان</span>
          </div>
          {discount && (
            <div className="hidden sm:block offer">
              <span className="font-bold text-sm md:text-lg">{sp(price)}</span>
              <span className="text-xs hidden lg:inline md:text-base mr-1">
                تومان
              </span>
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center justify-between mt-4">
        <button className="bg-gray-100 dark:bg-zinc-800 flex items-center justify-center w-7 h-7 md:w-10 md:h-10 rounded-full hover:bg-teal-600 hover:dark:bg-emerald-500 group">
          <ShoppingCartIcon className="w-4 h-4 md:w-6 md:h-6 text-gray-400 group-hover:text-white transition-all" />
        </button>
        <div className="flex items-center text-yellow-500">
          <StarIcon className="w-3 h-3 lg:w-5 lg:h-5" />
          <StarIcon className="w-3 h-3 lg:w-5 lg:h-5" />
          <StarIcon className="w-3 h-3 lg:w-5 lg:h-5" />
          <StarIcon className="w-3 h-3 lg:w-5 lg:h-5" />
          <StarIcon className="w-3 h-3 lg:w-5 lg:h-5" />
        </div>
      </div>
    </Link>
  );
}

export default CartProduct;
