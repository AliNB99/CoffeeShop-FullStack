import { categoryCoffeeList } from "@/constants/other";
import { Squares2X2Icon } from "@heroicons/react/24/outline";
import Link from "next/link";

function CategorySidebar({ category }) {
  return (
    <sidebar className="min-w-[300px] h-fit bg-white dark:bg-zinc-700 p-5 rounded-2xl shadow-medium ">
      <div className="mb-3 flex items-center gap-2 text-orange-200">
        <Squares2X2Icon />
        <h3 className="font-bold">دسته بندی</h3>
      </div>
      <ul className="pr-2 space-y-3">
        <li
          className={`${
            !category &&
            "bg-orange-200/20 text-orange-300 p-1 pr-2 rounded-lg transition-all scale-y-105"
          }`}
        >
          <Link href="/products">همه</Link>
        </li>
        {Object.keys(categoryCoffeeList).map((i, index) => (
          <li
            className={`${
              category === i &&
              "bg-orange-200/20 text-orange-300 p-1 pr-2 rounded-lg transition-all scale-y-105"
            }`}
            key={index}
          >
            <Link href={{ pathname: "/products", query: { category: i } }}>
              {categoryCoffeeList[i]}
            </Link>
          </li>
        ))}
      </ul>
    </sidebar>
  );
}

export default CategorySidebar;
