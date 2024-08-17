"use client";

import Link from "next/link";
import { Element } from "react-scroll";

const ItemList = [
  {
    title: "انواع قهوه",
    subTitle: "ترکیبی و تک خاستگاه",
    image: "/images/categories/category-right.jpg",
  },
  {
    title: "پودر های فوری",
    subTitle: "نسکافه ، هات چاکلت ، ماسالا",
    image: "/images/categories/category-left.jpg",
  },
];

function CategoryCoffee() {
  return (
    <Element name="targetElement" className="w-full mt-8 mb-10 md:my-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-white">
          {ItemList.map((i, index) => (
            <Link
              key={index}
              href="/"
              style={{
                backgroundImage: `url(${i.image})`,
              }}
              className={`relative overflow-hidden rounded-2xl h-40 md:h-60`}
            >
              <div className="category-banner">
                <h5 className="font-bold text-2xl/6 md:text-4xl/6 mb-4 md:mb-7">
                  {i.title}
                </h5>
                <span className="md:text-xl/6">{i.subTitle}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Element>
  );
}

export default CategoryCoffee;
