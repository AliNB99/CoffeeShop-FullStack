"use client";

import CircleTag from "@/atoms/CircleTag";
import ButtonCenter from "@/atoms/home/ButtonCenter";
import { Curve, Instagram, Logo, LogoType, Telegram } from "@/utils/svg";
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";

const list = [
  "حریم خصوصی",
  "شرایط استفاده",
  "پرسش های متداول",
  "ضمانت نامه",
  "عودت کالا",
  "ثبت سفارش",
  "فرصت های شغلی",
  "ارتباط با ما",
];

function Footer() {
  // To not display the header in the admin sections and the login and registration form
  const pathName = usePathname();
  if (
    pathName
      .split("/")
      .find(
        (i) =>
          i === "admin" || i === "signin" || i === "signup" || i === "dashboard"
      )
  )
    return;

  return (
    <footer className="relative bg-zinc-700 py-8 md:pb-11 md:pt-16 mt-20">
      <Curve
        className="absolute -top-px right-0 left-0 mx-auto hidden md:inline-block text-gray-100 dark:text-zinc-800 w-[100px] h-[22px] rotate-180
      "
      />
      <div className="absolute top-0 right-0 left-0 mx-auto -translate-y-2/4 hidden md:flex items-center justify-center">
        <ButtonCenter upDirection />
      </div>
      <div className="px-4 md:px-0 text-gray-300 sm:w-[94%] lg:w-[90%] mx-auto">
        <div className="flex justify-between flex-wrap">
          <div>
            <div className="flex gap-x-5 mb-6 md:mb-4.5 text-gray-300">
              <Logo className="w-[57px] h-[54px]" />
              <LogoType className="w-[138px] h-[54px]" />
            </div>
            <p className="xl:max-w-[506px] text-base/[48px]">
              ما برآنیم تا با پیشرو بودن در فرآیند تولید، نوع و کیفیت محصول،
              خدمات و توزیع، الگویی برای تولیدکنندگان ایرانی باشیم و به مرجع
              فرهنگ قهوه در ایران تبدیل شویم. می‌پنداریم که نظر مردم ایران و
              منطقه باید نسبت به کالای ایرانی بهبود یابد و در این راستا با
              اشتیاق می‌کوشیم.
            </p>
          </div>

          <div className="mt-10 md:mt-[26px]">
            <h4 className="font-DanaDemiBold text-2xl text-white mb-6 md:mb-7">
              دسترسی سریع
            </h4>
            <div className="grid grid-cols-2 gap-y-2.5 md:gap-y-5 gap-x-10 md:gap-x-16">
              {list.map((i, index) => (
                <Link
                  key={index}
                  href="#"
                  className="flex items-center gap-x-2 md:gap-x-3 hover:text-orange-300 transition-colors"
                >
                  <span className="inline-block w-2 md:w-2.5 h-1 bg-current rounded-full"></span>
                  {i}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-10 md:mt-[26px]">
            <h4 className="font-DanaDemiBold text-2xl text-white mb-6 md:mb-7">
              در تماس باشیم
            </h4>
            <div>
              <div className="mb-6 md:mb-10">
                <span className="flex items-center gap-x-2 md:gap-x-3 mb-4 md:mb-5">
                  <MapPinIcon />
                  بلوار میرداماد، خیابان البرز، کوچه قبادیان شرقی، پلاک ۳۳
                </span>
                <div className="flex flex-wrap gap-x-5 gap-y-4 font-DanaMedium">
                  <a
                    href="mailto:info@coffee.com"
                    className="flex items-center gap-x-2 md:gap-x-3 text-orange-300"
                  >
                    <EnvelopeIcon />
                    info@coffee.com
                  </a>
                  <div className="flex items-center gap-x-2 md:gap-x-3">
                    <PhoneIcon />
                    <span className="ltr-text">0902 123 6628</span>
                    <span className="ltr-text">021 - 6789012</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-x-1.5 md:gap-x-6 ltr-text font-DanaMedium">
                <Link
                  href="#"
                  className="flex items-center justify-center gap-x-2 h-12 text-zinc-700 bg-gradient-to-r from-orange-200 to-orange-300 rounded-xl flex-grow"
                >
                  <Telegram className="w-6 h-6 md:w-9 md:h-9" />
                  @golden_coffee
                </Link>
                <Link
                  href="#"
                  className="flex items-center justify-center gap-x-2 h-12 border border-orange-200 text-orange-200 rounded-xl flex-grow"
                >
                  <Instagram className="w-7 h-7 md:w-9 md:h-9" />
                  @golden_coffee
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between flex-wrap text-xs/5 md:text-base gap-x-4 border-t border-t-white/10 pt-10 md:pt-11 mt-10 md:mt-11">
          <div className="flex items-center gap-x-2.5">
            <CircleTag />
            <div className="flex items-center gap-1">
              <span>توسعه داده شده با ❤️ توسط</span>
              <Link
                target="_blank"
                href="https://github.com/AliNB99"
                className="text-orange-200 cursor-pointer hover:underline transition-all"
              >
                AliNB99
              </Link>
            </div>
          </div>
          <span className="ltr-text mr-auto">
            Copyright © 2024 Golden Coffee. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
