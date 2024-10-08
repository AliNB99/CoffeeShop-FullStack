import NotFoundProductPage from "@/templates/NotFoundProductPage";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import ProductDetailPage from "@/templates/ProductDetailPage";
import { getServerSession } from "next-auth";
import connectDB from "@/DB/connectDB";
import Product from "@/models/Product";
import User from "@/models/User";

async function ProductDetail({ params: { slug } }) {
  const [id] = slug;
  try {
    await connectDB();
  } catch (error) {
    console.log(error);
  }

  let product;
  try {
    product = await Product.findOne({ _id: id });
  } catch (error) {
    return <NotFoundProductPage />;
  }

  const session = await getServerSession(authOptions);
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

export const generateMetadata = async ({ params: { slug } }) => {
  const [id] = slug;
  try {
    await connectDB();
  } catch (error) {
    console.log(error);
  }

  let product;
  try {
    product = await Product.findOne({ _id: id });
  } catch (error) {
    console.log(error);
  }
  return {
    title: product.title,
    description: product.description,
    category: product.category,
    icons: { icon: "/images/fav-icon.png" },
  };
};
