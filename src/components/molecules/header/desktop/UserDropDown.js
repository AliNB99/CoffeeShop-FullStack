import {
  ArrowRightStartOnRectangleIcon,
  BriefcaseIcon,
  Cog6ToothIcon,
  EnvelopeIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { signOut } from "next-auth/react";

function UserDropDown({ role }) {
  return (
    <div className="absolute left-0 mt-2 opacity-0 invisible group-hover:opacity-100 delay-75 group-hover:visible w-52 text-white bg-white dark:bg-zinc-700 shadow-normal p-3 rounded-2xl transition-all">
      <ul className="space-y-1 text-base border-b border-gray-200 dark:border-white/10 pb-5 child:flex child:items-center child:gap-2.5 child:tracking-normal text-zinc-700 dark:text-white child:h-10 child-hover:bg-orange-200/20 child-hover:text-orange-300 child:pr-2.5 child:rounded-md child:transition-all">
        {role !== "USER" ? (
          <li>
            <BriefcaseIcon />
            <Link href="/admin">پنل ادمین</Link>
          </li>
        ) : (
          <>
            <li>
              <Cog6ToothIcon />
              <Link href="/dashboard">اطلاعات کاربری</Link>
            </li>
            <li>
              <ShoppingBagIcon />
              <Link href="/cart">سفارشات من</Link>
            </li>
          </>
        )}
        <li>
          <EnvelopeIcon />
          <Link href="/admin/ticket-list">لیست پیام ها</Link>
        </li>
      </ul>
      <button
        onClick={() => signOut()}
        className="flex items-center w-full gap-2.5 pr-2.5 py-2 mt-3 rounded-md text-base bg-red-400/10 text-red-400"
      >
        <ArrowRightStartOnRectangleIcon />
        <span>خروج از حساب</span>
      </button>
    </div>
  );
}

export default UserDropDown;
