import { Logo, LogoType } from "@/utils/svg";

import {
  HandThumbDownIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/outline";
import SliderProductImage from "@/molecules/common/SliderProductImage";
import CartDetails from "@/organisms/product/CartDetails";

function ProductDetailPage({ products }) {
  const {
    title,
    description,
    quantity,
    price,
    images,
    discount,
    advantages,
    disadvantages,
    specifications,
  } = products;

  return (
    <section className="space-top space-y-16">
      {/* details content */}
      <div className="flex flex-col lg:flex-row gap-5">
        {/* show slider image */}
        {!!images.length ? (
          <div className="w-full lg:w-72 xl:w-96 p-2 bg-white dark:bg-zinc-900 rounded-2xl shadow-medium">
            <SliderProductImage images={images} />
          </div>
        ) : (
          <div className="w-full lg:w-72 xl:w-96 p-2 hidden xl:flex justify-center items-center bg-white dark:bg-zinc-900 rounded-2xl shadow-medium">
            <LogoType className="w-fit h-32 lg:w-52 lg:h-64 opacity-20" />
          </div>
        )}

        {/* content and add Cart */}
        <div className="flex flex-col lg:flex-row gap-5 bg-white w-full dark:bg-zinc-900 rounded-2xl p-4 shadow-medium">
          {/* content title and details product */}
          <div className="flex-grow p-2">
            <h2
              title={title}
              className="font-bold text-2xl lg:w-[300px] xl:w-[500px] truncate-multiline"
            >
              {title}
            </h2>
            <h4
              className="text-lg mt-5 mb-1 font-medium text-orange-300
          "
            >
              مشخصات
            </h4>
            <ul className="details w-full p-3 h-64 child:flex child:justify-between overflow-y-auto child:p-3 divide-y-2 dark:divide-zinc-800">
              {specifications.map((i, index) => (
                <li key={index}>
                  <span className="font-bold">{i.title}</span>
                  <span className="text-zinc-600 dark:text-zinc-400">
                    {i.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          {/* price and Btb add product */}
          <CartDetails discount={discount} price={price} />
        </div>
      </div>
      {/* Description */}
      <div className="bg-white dark:bg-zinc-900 p-4 rounded-2xl shadow-medium">
        <div className="text-orange-300 w-1/2 flex items-center gap-2 border-b-2 p-2 border-orange-300 font-Morabba text-2xl font-medium">
          <Logo />
          <h4>توضیحات</h4>
        </div>
        <div className="p-4 space-y-10">
          <p className="leading-10 text-justify">{description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-0">
            <div>
              <div className="flex items-center gap-3 text-green-500 text-xl ">
                <HandThumbUpIcon />
                <h4 className="font-bold">مزایای محصول</h4>
              </div>
              <ul className="pr-6 space-y-3 mt-3 list-disc">
                {advantages.map((i, index) => (
                  <li key={index}>{i}</li>
                ))}
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-3 text-red-500 text-xl ">
                <HandThumbDownIcon />
                <h4 className="font-bold">معایب محصول</h4>
              </div>
              <ul className="pr-6 space-y-3 mt-3 list-disc">
                {disadvantages.map((i, index) => (
                  <li key={index}>{i}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetailPage;
