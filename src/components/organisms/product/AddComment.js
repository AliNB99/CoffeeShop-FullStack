"use client";

import { Logo } from "@/utils/svg";
import WriteComment from "@/molecules/product/WriteComment";
import { ArrowLeftEndOnRectangleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

function AddComment({ user, product }) {
  return (
    <div className="bg-white dark:bg-zinc-900 p-4 rounded-2xl shadow-medium space-y-4">
      <div className="text-orange-300 w-1/2 flex items-center gap-2 border-b-2 p-2 border-orange-300 font-Morabba text-2xl font-medium">
        <Logo />
        <h4>ثبت دیدگاه</h4>
      </div>
      {user ? (
        <WriteComment user={user} product={product} />
      ) : (
        <div className="flex p-10 flex-col gap-5 items-center justify-center">
          <h1 className="text-xs sm:text-sm md:text-medium lg:text-base font-bold">
            برای وارد کردن دیدگاه خود ابتدا وارد حساب کاربری خود شوید
          </h1>
          <Link
            className="flex items-center font-bold gap-2 p-3 rounded-lg bg-green-100 text-green-400"
            href="/signin"
          >
            ورود به حساب کاربری
            <ArrowLeftEndOnRectangleIcon />
          </Link>
        </div>
      )}
    </div>
  );
}

export default AddComment;
