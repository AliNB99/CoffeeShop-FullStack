"use client";

// Icon and Svg
import { Bars3Icon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { LogoType } from "@/utils/svg";
import { useSelector } from "react-redux";

function MobileHeader({ onShowElement }) {
  const { counterItems } = useSelector((state) => state.cart);
  return (
    <header className="sticky top-0 left-0 z-20 w-full shadow-md flex items-center justify-between p-4 md:hidden h-16 bg-white dark:bg-zinc-700">
      <button onClick={() => onShowElement({ element: "sidebar" })}>
        <Bars3Icon className="size-6 dark:text-white" />
      </button>

      <Link href="/">
        <LogoType className="text-orange-300 w-[100px] h-14" />
      </Link>

      <button
        className="relative"
        onClick={() => onShowElement({ element: "cartSidebar" })}
      >
        {!!counterItems && (
          <span className="absolute top-3 left-3 flex items-center justify-center text-xs text-white bg-red-500 w-5 h-5 pt-1 rounded-full">
            {counterItems}
          </span>
        )}
        <ShoppingCartIcon className="size-6 dark:text-white" />
      </button>
    </header>
  );
}

export default MobileHeader;
