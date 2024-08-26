import SliderVisibility from "@/molecules/home/SliderVisibility";
import connectDB from "@/DB/connectDB";
import Product from "@/models/Product";
import toast from "react-hot-toast";

async function BestSellerProducts() {
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
    <div className="w-full mb-20">
      <SliderVisibility data={JSON.parse(JSON.stringify(data))} />
    </div>
  );
}

export default BestSellerProducts;
