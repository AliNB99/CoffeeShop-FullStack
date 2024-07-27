"use client";

// Icon and Svg
import SidebarCart from "@/molecules/header/mobile/SidebarCart";
import SidebarItem from "@/molecules/header/mobile/SidebarItem";
import { Bars3Icon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import { showContext } from "@/context/ShowContextProvider";
import { LogoType } from "@/utils/svg";
import { useContext } from "react";
import Link from "next/link";

function MobileHeader({ role }) {
  const { showElement, onShowElement } = useContext(showContext);

  return (
    <header className="sticky top-0 left-0 z-20 w-full shadow-md flex items-center justify-between p-4 md:hidden h-16 bg-white dark:bg-zinc-700">
      <button onClick={() => onShowElement({ element: "sidebar" })}>
        <Bars3Icon className="size-6 dark:text-white" />
      </button>
      {/* overlay component */}
      <SidebarItem
        showElement={showElement}
        onShowElement={onShowElement}
        role={role}
      />

      <Link href="/">
        <LogoType className="text-orange-300 w-[100px] h-14" />
      </Link>

      <button onClick={() => onShowElement({ element: "cartSidebar" })}>
        <ShoppingCartIcon className="size-6 dark:text-white" />
      </button>
      <SidebarCart showElement={showElement} onShowElement={onShowElement} />
    </header>
  );
}

export default MobileHeader;
