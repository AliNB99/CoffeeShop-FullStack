import connectDB from "@/DB/connectDB";
import Product from "@/models/Product";
import ProductsPage from "@/templates/ProductsPage";
import CategorySidebar from "@/organisms/product/CategorySidebar";

async function Products(context) {
  try {
    await connectDB();
  } catch (error) {
    console.log(error);
  }

  const {
    searchParams: { category },
  } = context;

  const products = category
    ? await Product.find({ status: "available", category })
    : await Product.find({ status: "available" });

  return (
    <main className="space-top">
      <div className="flex flex-col gap-5 xl:flex-row">
        <CategorySidebar category={category} />
        <ProductsPage
          products={JSON.parse(JSON.stringify(products))}
          category={category}
        />
      </div>
    </main>
  );
}

export default Products;
