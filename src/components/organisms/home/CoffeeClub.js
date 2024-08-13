"use client";

import CustomImage from "@/atoms/CustomImage";
import { Activity, Discovery, TicketStar } from "@/utils/svg";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";
import Link from "next/link";

function CoffeeClub() {
  const { status } = useSession();

  return (
    <section className="mb-8 md:mb-20">
      <div className="container">
        <div className="flex items-center lg:gap-x-4 xl:gap-x-24 gap-y-9 bg-gradient-to-r flex-wrap lg:flex-nowrap from-emerald-500 to-emerald-600 text-white py-8 lg:py-0 lg:h-36 px-3 lg:px-5 xl:px-11 rounded-2xl">
          <div className="flex items-center md:shrink-0 gap-x-3 lg:gap-x-4 xl:gap-x-6">
            <CustomImage
              width={500}
              height={500}
              src="/images/club/diamond.png"
              className="w-[87px] lg:w-[100px] md:w-[110px]"
              alt="coffee-club"
            />
            <div>
              <h4 className="font-Morabba font-bold text-2xl md:text-5xl mb-2">
                کافی کلاب
              </h4>
              <p className="font-Morabba text-lg md:text-2xl">
                میدونستی میتونی با امتیاز هات قهوه بگیری ؟
              </p>
            </div>
          </div>
          <div className="flex justify-between w-full">
            <div className="flex gap-x-2 lg:gap-x-3 xl:gap-x-5">
              <div className="w-[72px] h-[72px] md:w-[98px] md:h-[98px] text-center text-emerald-600 bg-white py-1.5 md:pt-5 md:pb-1 rounded-2xl">
                <Discovery className="w-10 h-10 md:w-12 md:h-12 mb-1 md:mb-1.5 mx-auto" />
                <span className="text-xs md:text-sm">چرخ و بخت</span>
              </div>
              <div className="w-[72px] h-[72px] md:w-[98px] md:h-[98px] text-center text-emerald-600 bg-white py-1.5 md:pt-5 md:pb-1 rounded-2xl">
                <Activity className="w-10 h-10 md:w-12 md:h-12 mb-1 md:mb-1.5 mx-auto" />
                <span className="text-xs md:text-sm">ماموریت ها</span>
              </div>
              <div className="w-[72px] h-[72px] md:w-[98px] md:h-[98px] text-center text-emerald-600 bg-white py-1.5 md:pt-5 md:pb-1 rounded-2xl">
                <TicketStar className="w-10 h-10 md:w-12 md:h-12 mb-1 md:mb-1.5 mx-auto" />
                <span className="text-xs md:text-sm">جایزه ها</span>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              {status === "authenticated" ? (
                <>
                  <span className="md:mb-1 font-bold text-xl md:text-3xl">
                    542
                  </span>
                  <span className="text-xs md:text-sm">امتیاز شما</span>
                  <Link
                    href="#"
                    className="flex items-center justify-center mt-1 md:mt-2 w-28 md:w-32 h-8 bg-gradient-to-t from-orange-200 to-orange-300 font-bold text-xs md:text-sm rounded-full"
                  >
                    دریافت جایزه
                    <ChevronLeftIcon className="w-4 h-4" />
                  </Link>
                </>
              ) : (
                <Link
                  href="/signin"
                  className="flex items-center justify-center mt-1 md:mt-2 w-28 md:w-32 h-10 bg-gradient-to-t from-orange-200 to-orange-300 font-bold text-xs md:text-sm rounded-full"
                >
                  ثبت نام و ورود
                  <ChevronLeftIcon className="w-4 h-4" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CoffeeClub;