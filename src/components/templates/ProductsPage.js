import { categoryList } from "@/constants/other";
import CartProduct from "@/organisms/common/CartProduct";
import { Squares2X2Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { NoData } from "@/utils/svg";

function ProductsPage({ category, products }) {
  return (
    <div className="space-top">
      <div className="flex flex-col gap-5 xl:flex-row">
        <sidebar className="min-w-64 h-fit bg-white dark:bg-zinc-700 p-5 rounded-2xl shadow-medium ">
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
            {Object.keys(categoryList).map((i, index) => (
              <li
                className={`${
                  category === i &&
                  "bg-orange-200/20 text-orange-300 p-1 pr-2 rounded-lg transition-all scale-y-105"
                }`}
                key={index}
              >
                <Link href={{ pathname: "/products", query: { category: i } }}>
                  {categoryList[i]}
                </Link>
              </li>
            ))}
          </ul>
        </sidebar>
        {products.length ? (
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-5">
            {products.map((i) => (
              <CartProduct
                key={i._id}
                title={i.title}
                price={i.price}
                images={i.images}
                discount={i.discount}
                id={i._id}
              />
            ))}
          </div>
        ) : (
          <div className="relative w-full h-full flex flex-col items-center justify-center">
            <NoData className="w-full h-full lg:w-1/2 lg:h-1/2" />
            <h1 className="absolute top-10 text-2xl font-bold">
              هیچ موردی یافت نشد؟!
            </h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductsPage;
