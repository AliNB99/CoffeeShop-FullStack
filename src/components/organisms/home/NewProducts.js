import CartProduct from "../common/CartProduct";
import connectDB from "@/DB/connectDB";
import toast from "react-hot-toast";
import Product from "@/models/Product";
import TitleSection from "@/molecules/common/TitleSection";

async function NewProducts() {
  try {
    await connectDB();
  } catch (error) {
    console.log(error);
    return toast.error("خطا در دریافت اطلاعات");
  }

  const data = await Product.find({}).sort({ createAt: 1 }).limit(8);
  return (
    <section id="newP" className="products pt-8 lg:pt-48">
      <TitleSection
        title="جدید ترین محصولات"
        subTitle="فرآوری شده از دانه قهوه"
        link="/products"
      />

      {!!data.length ? (
        <div className="container grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-5 mt-12">
          {JSON.parse(JSON.stringify(data)).map((i) => (
            <CartProduct data={i} />
          ))}
        </div>
      ) : (
        <div className="container">
          <div className="text-center mt-20 p-2 rounded-lg bg-red-100 text-red-400">
            <h1 className="text-xl lg:text-2xl font-bold">
              هیچ محصولی یافت نشد؟!
            </h1>
          </div>
        </div>
      )}
    </section>
  );
}

export default NewProducts;
