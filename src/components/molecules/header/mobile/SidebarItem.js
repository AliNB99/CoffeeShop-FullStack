import { navbarItem } from "@/constants/other";
import {
  HomeIcon,
  XMarkIcon,
  Bars3Icon,
  ChevronDownIcon,
  ShoppingBagIcon,
  ArrowLeftEndOnRectangleIcon,
  ArrowRightStartOnRectangleIcon,
  UserIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { Logo, LogoType } from "@/utils/svg";
import DarkModeToggle from "../../common/DarkModeToggle";
import StoreDropDownMobile from "./StoreDropDownMobile";
import { signOut } from "next-auth/react";

function SidebarItem({ isShow, showItem, role }) {
  // function for show

  return (
    <nav
      className={`fixed ${
        isShow.sidebar ? "right-0" : "-right-64"
      } top-0 p-4 z-20 bg-white dark:bg-zinc-700 w-64 h-screen overflow-y-auto transition-all`}
    >
      {/* logo and cross Btn */}
      <div className="flex justify-between items-center pb-5 border-b border-gray-200 dark:border-white/10">
        <div className="flex items-center gap-3">
          <Logo className="text-orange-300 w-fit h-10" />
          <LogoType className="text-orange-300 w-[100px] h-10" />
        </div>
        <button
          className="bg-zinc-100 dark:bg-zinc-600/50 text-zinc-600 dark:text-white rounded-full p-1 transition-all"
          onClick={() => showItem("sidebar")}
        >
          <XMarkIcon />
        </button>
      </div>
      {/* links */}
      <div className="space-y-6 py-9 text-zinc-600 dark:text-white border-b border-gray-200 dark:border-white/10">
        <div className="h-10 flex items-center pr-2.5 bg-orange-200/20 text-orange-300 rounded-md">
          <Link className="w-full flex items-center gap-x-2" href="/">
            <HomeIcon />
            <span>صفحه اصلی</span>
          </Link>
        </div>
        <ul className="space-y-6 pr-4">
          <li>
            <div className="flex justify-between items-center" href="/">
              <Link
                href="/"
                className="flex gap-x-2 hover:text-orange-300 transition-colors"
              >
                <ShoppingBagIcon />
                <span>فروشگاه</span>
              </Link>
              <button
                className="bg-zinc-100 dark:bg-zinc-600/50 text-zinc-600 dark:text-white rounded-full p-1 transition-all"
                onClick={() => showItem("storeItem")}
              >
                <ChevronDownIcon
                  className={`w-4 h-4 cursor-pointer transition-all ease-linear ${
                    isShow.storeItem ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>
            <StoreDropDownMobile isShow={isShow} />
          </li>
          {navbarItem.map((i, index) => (
            <li key={index}>
              <Link
                className="flex items-center gap-x-2 hover:text-orange-300 transition-colors"
                href={i.link}
              >
                {i.icon}
                <span>{i.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* login & ThemeToggle & Shopping Cart */}
      <div className="space-y-6 child:flex child:items-center child:gap-x-2 pr-4 text-orange-300 py-9">
        {role ? (
          role === "ADMIN" ? (
            <Link href="/admin">
              <BriefcaseIcon />
              <span>پنل ادمین</span>
            </Link>
          ) : (
            <Link href="/dashboard">
              <UserIcon />
              <span>حساب کاربری</span>
            </Link>
          )
        ) : (
          <Link href="/signin">
            <ArrowLeftEndOnRectangleIcon />
            <span>ورود | ثبت نام</span>
          </Link>
        )}
        <DarkModeToggle label={true} />
        <Link href="/">
          <Bars3Icon />
          <span>سبد خرید</span>
        </Link>
      </div>
      {role && (
        <button
          onClick={() => signOut()}
          className="flex items-center w-full gap-x-2 pr-2.5 py-2 mt-3 rounded-md text-base bg-red-400/10 text-red-400"
        >
          <ArrowRightStartOnRectangleIcon />
          <span>خروج از حساب</span>
        </button>
      )}
    </nav>
  );
}

export default SidebarItem;
