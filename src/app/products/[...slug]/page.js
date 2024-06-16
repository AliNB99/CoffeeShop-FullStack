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

  const products = await Product.findOne({ _id: id });

  return <ProductDetailPage products={JSON.parse(JSON.stringify(products))} />;
}

export default ProductDetail;
