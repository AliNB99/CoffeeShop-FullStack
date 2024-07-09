"use client";

import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function SearchTable() {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const [value, setValue] = useState(searchParams.get("search") || "");

  const query = new URLSearchParams(searchParams.toString());

  const changeHandler = (e) => {
    const { value } = e.target;
    setValue(value);

    if (value) {
      query.set("search", value);
    } else {
      query.delete("search");
    }

    const search = query.toString();
    router.push(`${pathName}?${search}`);
  };

  return (
    <input
      className="border-2 dark:border-zinc-700 w-56 lg:w-96 text-xs md:text-sm px-2 h-9 rounded-md outline-indigo-400 shadow-normal"
      type="text"
      placeholder="جستجو بر اساس نام محصول..."
      value={value}
      onChange={changeHandler}
    />
  );
}

export default SearchTable;
