"use client";

import { ArrowLeftEndOnRectangleIcon } from "@heroicons/react/24/outline";
import WriteComment from "@/molecules/product/WriteComment";
import TitleDescription from "@/atoms/TitleDescription";
import Link from "next/link";

function AddComment({ user, product }) {
  return (
    <div className="bg-white dark:bg-zinc-900 p-4 rounded-2xl shadow-medium space-y-4">
      <TitleDescription title="ثبت دیدگاه" />
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
