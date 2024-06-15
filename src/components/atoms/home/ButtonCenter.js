import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

function ButtonCenter({ upDirection }) {
  return (
    <div className="absolute hidden md:flex items-center justify-center w-[30px] h-[30px] bottom-0 left-0 right-0 translate-y-1/2 mx-auto rounded-full border-2 border-orange-300">
      <Link href="#newP">
        <ChevronDownIcon className={`size-5 ${upDirection && "rotate-180"}`} />
      </Link>
    </div>
  );
}

export default ButtonCenter;
