import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { LogoType } from "@/utils/svg";
import Image from "next/image";
import Link from "next/link";

function BlogCart({ blog }) {
  const { title, image } = blog;
  return (
    <div className="group cursor-pointer flex gap-x-2.5 sm:block p-2.5 md:pb-2 bg-white dark:bg-zinc-700 shadow-normal rounded-xl">
      <div className="relative w-32 h-32 shrink-0 sm:w-auto sm:h-auto sm:mb-4 rounded-2xl rounded-bl-[40px] overflow-hidden">
        <Image
          src={image}
          width={500}
          height={500}
          className="h-full object-cover"
        />
        <div className="absolute inset-0 w-full hidden md:flex md:justify-center md:items-center invisible opacity-0 group-hover:opacity-100 group-hover:visible bg-gradient-to-t from-orange-200/80 to-orange-300/80 transition-all delay-100">
          <LogoType className="w-[138px] h-[54px] text-amber-900" />
        </div>
      </div>
      <div className="w-full flex flex-col gap-2 sm:flex-row justify-between items-start">
        <Link
          href="/"
          className="font-medium text-sm/7 md:text-lg mt-2.5 sm:mt-0 ml-1.5 sm:ml-0 line-clamp-2 max-w-48 text-zinc-700 dark:text-white"
        >
          {title}
        </Link>
        <div className="hidden sm:flex gap-5">
          <span className="hidden lg:block w-px h-16 bg-gray-100 dark:bg-white/10"></span>
          <div className="flex flex-col ml-[12px] lg:ml-5 -mt-1 text-teal-600 dark:text-emerald-500 text-sm text-left">
            <span className="font-bold md:text-xl lg:text-2xl">21</span>
            <span>مرداد</span>
            <span>1402</span>
          </div>
        </div>
        <div className="w-full flex items-end justify-between sm:hidden border-t border-t-gray-100 dark:border-t-white/10 pt-5 pb-1.5">
          <span className="text-teal-600 dark:text-emerald-500 font-bold text-xs">
            1402 مرداد 21
          </span>
          <Link
            href="/"
            className="flex items-center gap-x-1 text-xs h-5 rounded-md pr-2.5 pl-2 ml-1.5 bg-orange-200/20 text-orange-300"
          >
            مطالعه
            <ChevronLeftIcon className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogCart;
