import connectDB from "@/DB/connectDB";
import Product from "@/models/Product";
import ProductsPage from "@/templates/ProductsPage";

async function Products(context) {
  try {
    await connectDB();
  } catch (error) {
    console.log(error);
  }

  const category = context.searchParams.category;
  let products = await Product.find({ available: true });

  if (category) {
    products = products.filter((product) => product.category === category);
  }

  return (
    <ProductsPage
      category={category}
      products={JSON.parse(JSON.stringify(products))}
    />
  );
}

export default Products;
