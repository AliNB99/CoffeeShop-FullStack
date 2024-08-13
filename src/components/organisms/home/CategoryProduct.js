import CustomImage from "@/atoms/CustomImage";
import { categoryProductList } from "@/constants/other";
import Link from "next/link";
import React from "react";

function CategoryProduct() {
  return (
    <section className="products-category mb-10 md:mb-20">
      <div className="container">
        <div className="flex items-center justify-center gap-y-6 gap-x-7 md:gap-16 flex-wrap">
          {categoryProductList.map((i) => (
            <div className="text-center">
              <Link href={i.link}>
                <CustomImage
                  className="w-24 h-24 md:w-full md:h-full transition-opacity opacity-0 duration-[1s]"
                  src={i.image}
                  width={200}
                  height={200}
                  alt="image category"
                />
                <span className="inline-block w-24 md:w-48 font-Dana font-bold text-sm md:text-xl text-zinc-700 dark:text-white mt-1.5 md:mt-2.5">
                  {i.title}
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoryProduct;
