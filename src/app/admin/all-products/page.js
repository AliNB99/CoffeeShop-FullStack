import connectDB from "@/DB/connectDB";
import Product from "@/models/Product";
import AllProductsPage from "@/templates/admin/AllProductsPage";

async function AllProducts(context) {
  try {
    await connectDB();
  } catch (error) {
    console.log(error);
  }
  const search = context.searchParams.search || "";

  const products = await Product.find({
    title: { $regex: search, $options: "i" },
  });

  return <AllProductsPage products={JSON.parse(JSON.stringify(products))} />;
}

export default AllProducts;
