"use client";

import Link from "next/link";
import {
  ArrowRightStartOnRectangleIcon,
  HomeIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { useContext } from "react";
import { showContext } from "@/context/ShowContextProvider";
import { adminDashboardItem, userDashboardItem } from "@/constants/dashboard";
import DarkModeToggle from "@/molecules/common/DarkModeToggle";

function DashboardSidebar({ role }) {
  const { isShow, showItem } = useContext(showContext);
  return (
    <aside
      className={`fixed lg:relative ${
        isShow.sidebar ? "right-0" : "-right-64"
      } lg:right-0 top-0 h-full overflow-y-auto w-64 lg:w-72 bg-white dark:bg-zinc-700 shadow-xl transition-all z-30 p-4`}
    >
      <div className="flex lg:hidden items-center justify-end py-2">
        <button
          className="bg-zinc-100 dark:bg-zinc-600/50 text-zinc-600 dark:text-white rounded-full p-1 transition-all"
          onClick={() => showItem("sidebar")}
        >
          <XMarkIcon />
        </button>
      </div>
      <div className="flex flex-col items-center border-b border-zinc-300 space-y-4 dark:border-zinc-600 pb-5">
        <Image
          src="/images/app-logo.png"
          width={60}
          height={60}
          loading="lazy"
          alt="avatar"
          className="border-2 border-zinc-300 dark:border-zinc-600 rounded-full p-1"
        />
        <div className="flex flex-col items-center">
          <h4>علی بلبلی</h4>
          <p className="text-sm text-zinc-400">ادمین</p>
        </div>
      </div>
      <div className="border-b border-zinc-300 dark:border-zinc-600 pb-7">
        <div>
          <ul className="space-y-6 pt-7">
            {(role === "ADMIN" ? adminDashboardItem : userDashboardItem).map(
              (i, index) => (
                <li
                  key={index}
                  className={`${
                    !index &&
                    "bg-orange-200/20 text-orange-300 w-full py-2 rounded-lg"
                  } pr-4 flex items-center gap-2 hover:text-orange-300 active:text-orange-400 transition-all w-fit`}
                >
                  {i.icon}
                  <Link href={i.link}>{i.title}</Link>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
      <div className="py-7 space-y-6 child:flex child:items-center child:gap-x-2 pr-4 text-orange-300">
        <Link href="/">
          <HomeIcon />
          <span>صفحه اصلی</span>
        </Link>
        <DarkModeToggle label={true} />
      </div>
      <button className="flex items-center w-full gap-2.5 pr-2.5 py-2 rounded-md text-base bg-red-400/10 text-red-400">
        <ArrowRightStartOnRectangleIcon />
        <span>خروج</span>
      </button>
    </aside>
  );
}

export default DashboardSidebar;
