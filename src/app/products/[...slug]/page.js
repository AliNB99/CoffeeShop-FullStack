import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import connectDB from "@/DB/connectDB";
import Product from "@/models/Product";
import User from "@/models/User";
import ProductDetailPage from "@/templates/ProductDetailPage";
import { getServerSession } from "next-auth";

async function ProductDetail({ params: { slug } }) {
  const id = slug[0];

  try {
    await connectDB();
  } catch (error) {
    console.log(error);
  }

  const session = await getServerSession(authOptions);

  const product = await Product.findOne({ _id: id });
  const user =
    (await User.findOne({ email: session?.user.email }).select("-password")) ||
    "";

  return (
    <ProductDetailPage
      user={JSON.parse(JSON.stringify(user))}
      product={JSON.parse(JSON.stringify(product))}
    />
  );
}

export default ProductDetail;
