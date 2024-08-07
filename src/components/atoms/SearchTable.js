"use client";

import { useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Input, Spinner } from "@nextui-org/react";
import { useDebouncedCallback } from "use-debounce";

function SearchTable({
  searchValue,
  setSearchValue,
  setPage,
  isFetching,
  isPending,
}) {
  const { replace } = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const query = new URLSearchParams(searchParams.toString());

  const onSearchChange = useDebouncedCallback((searchValue) => {
    if (searchValue) {
      setSearchValue(searchValue);
      query.set("search", searchValue);
      setPage(1);
    } else {
      query.delete("search");
      setSearchValue("");
    }
    const search = query.toString();
    replace(`${pathName}?${search}`);
  }, 300);

  const onClear = useCallback(() => {
    setSearchValue("");
    setPage(1);
  }, []);

  return (
    <Input
      isClearable
      className={`border-2 border-gray-300 dark:border-gray-500 rounded-xl w-full md:min-w-[44%]`}
      placeholder="جستجو بر اساس نام کاربری..."
      startContent={
        !isPending && searchValue.length && isFetching ? (
          <Spinner size="sm" color="inherit" className="text-red-500" />
        ) : (
          <MagnifyingGlassIcon />
        )
      }
      defaultValue={searchParams.get("search")?.toString()}
      onClear={() => onClear()}
      onValueChange={onSearchChange}
    />
  );
}

export default SearchTable;
