"use client";

import { ArrowPathIcon, HomeIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { LogoType } from "@/utils/svg";

function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  const pathName = usePathname();
  const router = useRouter();

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-5">
      <LogoType className="w-[200px] h-14 text-orange-300" />
      <h2 className="text-zinc-700 dark:text-zinc-300 text-xs sm:text-base md:text-xl text-center font-semibold rounded-md p-2">
        مشکلی پیش آمده است. لطفا دقایقی بعد مجددا امتحان نمایید.
      </h2>
      <div className="flex gap-3">
        <button
          title="ریست کردن"
          className="text-orange-300 border-2 border-orange-300 shadow-sm transition-all p-2 rounded-3xl font-semibold"
          onClick={() => reset()}
        >
          <ArrowPathIcon className="size-7" />
        </button>
        {pathName && (
          <button
            title="صفحه اصلی"
            className="text-orange-300 border-2 p-2 border-orange-300 shadow-sm transition-all rounded-full font-semibold"
            onClick={() => router.push("/")}
          >
            <HomeIcon className="size-7" />
          </button>
        )}
      </div>
    </div>
  );
}

export default Error;
