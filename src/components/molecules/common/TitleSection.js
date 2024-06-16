import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

function TitleSection({ title, subTitle, link }) {
  return (
    <div className="container flex items-center justify-between">
      <div className="font-Morabba text-zinc-700 dark:text-white">
        <h1 className="font-medium text-xl sm:text-2xl lg:text-5xl">{title}</h1>
        <p className="text-base sm:text-lg lg:text-3xl">{subTitle}</p>
      </div>
      <Link
        className="text-orange-300 w-32 h-10 flex items-center justify-center rounded-md gap-1 hover:bg-orange-200/20 transition-all"
        href={link}
      >
        <span>مشاهده همه</span>
        <ChevronLeftIcon className="w-4 h-4" />
      </Link>
    </div>
  );
}

export default TitleSection;
