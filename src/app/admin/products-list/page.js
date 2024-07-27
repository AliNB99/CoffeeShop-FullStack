import connectDB from "@/DB/connectDB";
import Product from "@/models/Product";
import ProductsListPage from "@/templates/admin/ProductsListPage";

async function ProductsList(context) {
  try {
    await connectDB();
  } catch (error) {
    console.log(error);
  }
  const search = context.searchParams.search || "";

  const products = await Product.find({
    title: { $regex: search, $options: "i" },
  });

  return <ProductsListPage products={JSON.parse(JSON.stringify(products))} />;
}

export default ProductsList;
