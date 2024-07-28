"use client";

import Link from "next/link";
import {
  ArrowRightStartOnRectangleIcon,
  HomeIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useContext } from "react";
import { showContext } from "@/context/ShowContextProvider";
import {
  adminDashboardItem,
  roleColorMap,
  roleTitle,
  userDashboardItem,
} from "@/constants/dashboard";
import { Chip } from "@nextui-org/react";
import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import DarkModeToggle from "@/molecules/common/DarkModeToggle";
import AddAvatarCustom from "@/molecules/common/AddAvatarCustom";

function DashboardSidebar({ user }) {
  const { role, lastName, firstName } = user;
  const { showElement, onShowElement } = useContext(showContext);

  const pathname = usePathname();

  return (
    <aside
      className={`fixed lg:relative ${
        showElement.sidebar ? "right-0" : "-right-64"
      } lg:right-0 top-0 min-h-full overflow-y-auto w-64 lg:w-72 bg-white dark:bg-zinc-700 shadow-xl transition-all z-30 p-4`}
    >
      <div className="flex lg:hidden items-center justify-end py-2">
        <button
          className="bg-zinc-100 dark:bg-zinc-600/50 text-zinc-600 dark:text-white rounded-full p-1 transition-all"
          onClick={() => onShowElement({ element: "sidebar" })}
        >
          <XMarkIcon />
        </button>
      </div>
      <div className="flex flex-col items-center border-b border-zinc-300 space-y-4 dark:border-zinc-600 pb-5">

        <AddAvatarCustom user={user} />

        <div className="flex flex-col items-center">
          <h4>{`${firstName} ${lastName}`}</h4>
          <Chip
            className="capitalize mt-2 px-2"
            color={roleColorMap[role]}
            size="sm"
            variant="flat"
          >
            {roleTitle[role]}
          </Chip>
        </div>
      </div>
      <div className="border-b border-zinc-300 dark:border-zinc-600 pb-7">
        <div>
          <ul className="space-y-6 pt-7">
            {(role === "OWNER" || role === "ADMIN"
              ? adminDashboardItem
              : userDashboardItem
            ).map((i, index) => (
              <li
                key={index}
                className={`${
                  pathname === i.link &&
                  "bg-orange-200/20 text-orange-300 w-full py-2 rounded-lg"
                } pr-4 flex items-center gap-2 hover:text-orange-300 active:text-orange-400 transition-all w-fit`}
              >
                {i.icon}
                <Link href={i.link}>{i.title}</Link>
              </li>
            ))}
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
      <button
        onClick={signOut}
        className="flex items-center w-full gap-2.5 pr-2.5 py-2 rounded-md text-base bg-red-400/10 text-red-400"
      >
        <ArrowRightStartOnRectangleIcon />
        <span>خروج</span>
      </button>
    </aside>
  );
}

export default DashboardSidebar;
