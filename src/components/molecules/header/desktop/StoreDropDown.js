import { storeDesktopItem } from "@/constants/homePageItem";
import Link from "next/link";

function StoreDropDown() {
  return (
    <ul className="absolute top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible w-52 p-6 space-y-4 text-zinc-700 dark:text-white bg-white dark:bg-zinc-700 text-base border-t-[3px] border-t-orange-300 tracking-normal shadow-normal rounded-2xl transition-all delay-75 child:transition-colors child-hover:text-orange-300">
      {storeDesktopItem.map((i, index) => (
        <li key={index}>
          <Link href={i.link}>{i.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export default StoreDropDown;
