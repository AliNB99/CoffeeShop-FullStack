import connectDB from "@/DB/connectDB";
import Product from "@/models/Product";
import AllProductsPage from "@/templates/admin/AllProductsPage";

async function AllProducts() {
  try {
    await connectDB();
  } catch (error) {
    console.log(error);
  }

  const products = await Product.find({});

  return <AllProductsPage products={JSON.parse(JSON.stringify(products))} />;
}

export default AllProducts;
