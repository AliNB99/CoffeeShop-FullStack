import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import TitleSection from "@/atoms/home/TitleSection";
import CardProduct from "../common/CardProduct";
import Product from "@/models/Product";
import connectDB from "@/DB/connectDB";
import toast from "react-hot-toast";
import Link from "next/link";
import NotFoundProductLabel from "@/atoms/home/NotFoundProductLabel";

async function NewProducts() {
  try {
    await connectDB();
  } catch (error) {
    console.log(error);
    return toast.error("خطا در دریافت اطلاعات");
  }
  const data = await Product.find({ status: "available", quantity: { $ne: 0 } })
    .sort({ createAt: -1 })
    .limit(8);
  return (
    <section className="products w-full pt-8 lg:pt-48">
      <div className="container flex items-center justify-between mb-10">
        <TitleSection
          title="جدید ترین محصولات"
          subTitle="فرآوری شده از دانه قهوه"
        />
        <Link
          className="text-orange-300 w-32 h-10 flex items-center justify-center rounded-md gap-1 hover:bg-orange-200/20 transition-all"
          href="/products"
        >
          <span>مشاهده همه</span>
          <ChevronLeftIcon className="w-4 h-4" />
        </Link>
      </div>

      {!!data.length ? (
        <div className="container grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-5">
          {JSON.parse(JSON.stringify(data)).map((i) => (
            <CardProduct key={i._id} data={i} />
          ))}
        </div>
      ) : (
        <NotFoundProductLabel label="هیچ محصولی یافت نشد؟!" />
      )}
    </section>
  );
}

export default NewProducts;
