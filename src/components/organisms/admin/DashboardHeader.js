"use client";

import { Bars3Icon, EnvelopeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useContext } from "react";
import { LogoType } from "@/utils/svg";
import { showContext } from "@/context/ShowContextProvider";

function DashboardHeader() {
  const { onShowElement } = useContext(showContext);
  return (
    <header className="fixed top-0 left-0 right-0 flex lg:hidden z-30 items-center justify-between mx-auto h-16 px-2 shadow-medium bg-white dark:bg-zinc-700">
      <div className="h-full flex items-center gap-3">
        <button
          onClick={() => onShowElement({ element: "sidebar" })}
          className="rounded-full transition-all p-2"
        >
          <Bars3Icon className="size-6 dark:text-white" />
        </button>
      </div>
      <Link href="/">
        <LogoType className="text-orange-300 w-[100px] h-14" />
      </Link>
      <div className="relative flex items-center gap-3">
        <button className="transition-all group text-zinc-700 dark:text-white p-2.5 rounded-full">
          <EnvelopeIcon className="size-6 dark:text-white" />
          <div className="absolute top-0 left-6 leading-4 min-h-4 min-w-4 p-px bg-red-500 rounded-full transition-all">
            <span className="text-white text-xs">0</span>
          </div>
        </button>
      </div>
    </header>
  );
}

export default DashboardHeader;
