import connectDB from "@/DB/connectDB";
import Product from "@/models/Product";
import ProductDetailPage from "@/templates/ProductDetailPage";

async function ProductDetail({ params: { slug } }) {
  const id = slug[0];

  try {
    await connectDB();
  } catch (error) {
    console.log(error);
  }

  const product = await Product.findOne({ _id: id });

  return <ProductDetailPage product={JSON.parse(JSON.stringify(product))} />;
}

export default ProductDetail;
