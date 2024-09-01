"use client";

import {
  ArrowLeftEndOnRectangleIcon,
  PencilSquareIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { listUserInfo } from "@/constants/dashboardItem";
import { User } from "@nextui-org/react";
import Link from "next/link";
import { useCallback } from "react";

function BuyerInformation({ user }) {
  const createItem = useCallback((item, index) => {
    switch (item.name) {
      case "user":
        return (
          <User
            key={index}
            avatarProps={{
              src: user.avatar,
              radius: "full",
              fallback: <UserIcon className="opacity-50" />,
              showFallback: true,
            }}
            description={user.email}
            name={`${user.firstName} ${user.lastName}`}
          />
        );

      default:
        return (
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
        );
    }
  }, []);

  return (
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
      {user ? (
        listUserInfo.map((item, index) => createItem(item, index))
      ) : (
        <div className="flex flex-col justify-center items-center">
          <h4 className="py-5 text-center font-medium text-xs sm:text-sm">
            جهت خرید ابتدا وارد حساب کاربری خود شوید
          </h4>
          <Link
            className="w-full rounded-lg flex items-center justify-center gap-2 font-medium p-2 bg-blue-100 text-blue-400"
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

export default BuyerInformation;
