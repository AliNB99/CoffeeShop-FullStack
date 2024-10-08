"use client";

import {
  Bars3Icon,
  EnvelopeIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { showContext } from "@/context/ShowContextProvider";
import { useSelector } from "react-redux";
import { LogoType } from "@/utils/svg";
import { useContext } from "react";
import Link from "next/link";

function DashboardHeader({ user: { role } }) {
  const { onShowElement } = useContext(showContext);
  const { counterItems } = useSelector((state) => state.cart);

  return (
    <header className="fixed top-0 left-0 right-0 flex lg:hidden z-20 items-center justify-between mx-auto h-16 px-2 shadow-medium bg-white dark:bg-zinc-700">
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
        <button
          onClick={() => {
            if (role === "USER") {
              onShowElement({ element: "cartSidebar" });
            } else {
              onShowElement({ element: "ticketList" });
            }
          }}
          className="relative transition-all group text-zinc-700 dark:text-white p-2.5 rounded-full"
        >
          {role === "USER" ? (
            <>
              <ShoppingCartIcon className="size-6 dark:text-white" />
              {!!counterItems && (
                <span className="absolute top-2 left-6 flex items-center justify-center text-xs font-bold text-white bg-red-500 w-5 h-5 pt-1 rounded-full">
                  {counterItems}
                </span>
              )}
            </>
          ) : (
            <>
              <EnvelopeIcon className="size-6 dark:text-white" />
              <div className="absolute top-0 left-6 leading-4 min-h-4 min-w-4 p-px bg-red-500 rounded-full transition-all">
                <span className="text-white font-bold text-xs">3</span>
              </div>
            </>
          )}
        </button>
      </div>
    </header>
  );
}

export default DashboardHeader;
