"use client";

// Icon and Svg
import SidebarCart from "@/molecules/header/mobile/SidebarCart";
import SidebarItem from "@/molecules/header/mobile/SidebarItem";
import { Bars3Icon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { showContext } from "@/context/ShowContextProvider";
import { LogoType } from "@/utils/svg";

function MobileHeader({ role }) {
  const { isShow, showItem } = useContext(showContext);

  return (
    <header className="sticky top-0 left-0 z-20 w-full shadow-md flex items-center justify-between p-4 md:hidden h-16 bg-white dark:bg-zinc-700">
      <button onClick={() => showItem("sidebar")}>
        <Bars3Icon className="size-6" />
      </button>
      {/* overlay component */}
      <SidebarItem isShow={isShow} showItem={showItem} role={role} />

      <Link href="/">
        <LogoType className="text-orange-300 w-[100px] h-14" />
      </Link>

      <button onClick={() => showItem("cartSidebar")}>
        <ShoppingCartIcon className="size-6" />
      </button>
      <SidebarCart isShow={isShow} showItem={showItem} />
    </header>
  );
}

export default MobileHeader;
