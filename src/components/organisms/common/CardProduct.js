import CustomImage from "@/atoms/CustomImage";
import CardButton from "@/molecules/common/CardButton";
import { sp } from "@/utils/helper/replaceNumber";
import { LogoType } from "@/utils/svg";
import { StarIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

function CardProduct({ data }) {
  const { title, price, images, discount, _id, quantity } = data;

  return (
    <div className="w-full relative bg-white dark:bg-zinc-700 hover:shadow-medium dark:hover:shadow-zinc-500 rounded-2xl cursor-pointer p-2 md:p-5 transition-all">
      <Link target="_blank" className="w-full" href={`/products/${_id}`}>
        <div className="relative flex justify-center">
          {images.length ? (
            <div className="w-full h-32 lg:w-64 lg:min-h-64 flex items-center justify-center ">
              <CustomImage
                src={images[0]}
                width={300}
                height={300}
                alt="product image"
                className="w-full h-32 lg:h-full rounded-lg transition-opacity opacity-0 duration-[1s]"
              />
            </div>
          ) : (
            <div>
              <LogoType className="w-fit h-32 lg:w-52 lg:h-64 opacity-20" />
            </div>
          )}
          {!!discount && quantity > 0 && (
            <span className="absolute top-0 right-0 bg-orange-300 px-3 lg:px-4 py-1 rounded-full font-bold text-white text-xs lg:text-base dark:text-zinc-700">
              {discount}%
            </span>
          )}
        </div>
        <div className="mt-5 space-y-2.5">
          <h3 className="font-DanaMedium text-sm md:text-base lg:text-xl h-10 md:h-14 text-zinc-700 dark:text-white line-clamp-2">
            {title}
          </h3>
          {quantity > 0 ? (
            <div className="flex items-center gap-2.5">
              <div className="text-base md:text-xl text-teal-600 dark:text-emerald-500">
                <span className="font-bold">
                  {discount ? sp((price * (discount - 100)) / 100) : sp(price)}
                </span>
                <span className="text-xs md:text-base mr-1">تومان</span>
              </div>
              {discount && (
                <div className="offer hidden md:block">
                  <span className="font-bold text-sm lg:text-lg">
                    {sp(price)}
                  </span>
                  <span className="text-xs hidden lg:inline md:text-base mr-1">
                    تومان
                  </span>
                </div>
              )}
            </div>
          ) : (
            <h1 className="text-red-400 text-xs md:text-base font-bold">
              متاسفانه فعلا موجود نیست
            </h1>
          )}
        </div>
      </Link>
      <div className="flex items-center justify-between cursor-default mt-4">
        <CardButton disabled={quantity === 0} data={data} />
        <div className="flex gap-1 text-yellow-500">
          <span className="text-xs md:text-lg">2.5</span>
          <StarIcon className="w-3 h-3 md:w-5 md:h-5" />
        </div>
      </div>
    </div>
  );
}

export default CardProduct;
