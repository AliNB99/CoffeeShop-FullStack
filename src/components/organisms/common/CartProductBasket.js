import CustomImage from "@/atoms/CustomImage";
import CartButton from "@/molecules/common/CartButton";
import { sp } from "@/utils/helper/replaceNumber";

function CartProductBasket({ product }) {
  const { title, images, price, discount } = product;
  console.log(discount);
  return (
    <div className="w-full flex items-center justify-between font-Dana gap-5">
      <CustomImage
        src={images[0]}
        width={100}
        height={100}
        alt="product image"
      />
      <div className="flex flex-col items-start justify-center flex-grow text-zinc-700 dark:text-white gap-2">
        <h1 className="text-sm lg:text-base font-medium max-h-10 overflow-hidden text-ellipsis">
          {title}
        </h1>

        <div className="w-full md:flex items-center justify-between">
          <div className="mb-4 md:mb-0">
            <div className="text-xs font-medium text-teal-600 dark:text-emerald-500">
              <span>{sp((price * discount) / 100)}</span>
              <span>تومان تخفیف</span>
            </div>
            <div className="text-zinc-700 dark:text-white/80">
              <span className="font-semibold">{sp(price)}</span>
              <span className="text-xs font-semibold">تومان</span>
            </div>
          </div>
          <CartButton data={product} />
        </div>
      </div>
    </div>
  );
}

export default CartProductBasket;
