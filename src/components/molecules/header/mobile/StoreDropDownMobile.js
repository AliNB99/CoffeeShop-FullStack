import { storeDropDownMobile } from "@/constants/other";
import Link from "next/link";

function StoreDropDownMobile({ showElement }) {
  return (
    <ul
      className={`${
        showElement.storeItem ? "h-[200px] mt-3" : "h-0"
      } overflow-hidden transition-all pr-7 space-y-4 text-zinc-600 dark:text-white text-sm tracking-normal rounded-2xl child:transition-all child-hover:text-orange-300`}
    >
      {storeDropDownMobile.map((i, index) => (
        <li key={index}>
          <Link href="/">{i.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export default StoreDropDownMobile;
