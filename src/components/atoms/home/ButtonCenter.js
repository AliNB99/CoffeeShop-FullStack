"use client";

import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Link } from "react-scroll";

function ButtonCenter({ upDirection }) {
  return (
    <div className="animate-bounce focus:animate-none hover:animate-none focus:bottom-0 hover:bottom-0 text-md font-medium absolute hidden md:flex items-center justify-center w-[30px] h-[30px] -bottom-5 left-0 right-0 translate-y-1/2 mx-auto rounded-full border-2 border-orange-300">
      <Link to="targetElement" smooth={true} duration={500}>
        <ChevronDownIcon
          className={`size-5 dark:text-white ${upDirection && "rotate-180"}`}
        />
      </Link>
    </div>
  );
}

export default ButtonCenter;
