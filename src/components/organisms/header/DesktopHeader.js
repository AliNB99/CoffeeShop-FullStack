"use client";

import { navbarItem } from "@/constants/other";
import DarkModeToggle from "@/molecules/common/DarkModeToggle";
import StoreDropDown from "@/molecules/header/desktop/StoreDropDown";
import UserDropDown from "@/molecules/header/desktop/UserDropDown";
import {
  ShoppingCartIcon,
  ArrowLeftEndOnRectangleIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function DesktopHeader({ role }) {
  // To not display the header in the admin sections and the login and registration form
  const pathName = usePathname();
  if (
    pathName
      .split("/")
      .find((i) => i === "admin" || i === "signin" || i === "signup")
  )
    return;

  return (
    <header className="hidden md:flex items-center fixed top-9 right-0 left-0 z-50 w-[98%] lg:w-[90%] h-24 px-5 lg:px-10 py-5 mx-auto bg-black/50 rounded-3xl backdrop-blur">
      <div className="w-full flex justify-between items-center">
        {/* logo and menu */}
        <nav className="h-14 flex items-center gap-9">
          {/* logo */}
          <Link href="/">
            <Image
              src="/images/app-logo.png"
              width={59}
              height={56}
              alt="Golden Coffee"
            />
          </Link>
          {/* nav item */}
          <div className="flex items-center gap-x-4 lg:gap-x-9 text-xl tracking-tightest">
            <Link className="text-orange-200 font-medium" href="/">
              صفحه اصلی
            </Link>
            <ul
              role="nav item"
              className="h-full flex items-center gap-x-4 lg:gap-x-9 text-zinc-200 child-hover:text-orange-300 child:transition-colors child:leading-[56px]"
            >
              <li className="relative group group-hover:text-orange-300">
                <Link href="/">فروشگاه</Link>
                <StoreDropDown />
              </li>
              {navbarItem.map((item, index) => (
                <li key={index}>
                  <Link href={item.link}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
        {/* loginBtn & ThemeToggle & shoppingCart */}
        <div className="relative flex items-center gap-x-4 lg:gap-x-5 xl:gap-x-10 text-orange-200 text-xl tracking-tightest">
          <div className="flex items-center gap-5">
            <ShoppingCartIcon className="w-8 h-8" />
            <DarkModeToggle className="w-8 h-8" />
          </div>
          {/* Divide border*/}
          <span className=" border-l-2 border-white/20 h-14"></span>

          <div className="group">
            {role ? (
              <>
                <Link
                  href="/"
                  className="flex items-center gap-2 delay-75 group-hover:bg-orange-200/20 group-hover:px-7 group-hover:py-3 transition-all rounded-full"
                >
                  <UserIcon className="w-8 h-8" />
                  <span className="hidden xl:inline-block">حساب کاربری</span>
                </Link>
                <UserDropDown role={role} />
              </>
            ) : (
              <Link
                href="/signin"
                className="flex items-center gap-2 delay-75 hover:bg-orange-200/20 hover:px-7 hover:py-3 transition-all rounded-full"
              >
                <ArrowLeftEndOnRectangleIcon className="w-8 h-8 rotate-180" />
                <span className="hidden xl:inline-block">ورود | ثبت نام</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default DesktopHeader;
