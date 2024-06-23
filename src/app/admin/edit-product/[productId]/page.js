import connectDB from "@/DB/connectDB";
import Product from "@/models/Product";
import EditProductPage from "@/templates/admin/EditProductPage";

async function EditProduct(context) {
  const { productId } = context.params;

  try {
    await connectDB();
  } catch (error) {
    console.log(error);
  }

  const product = await Product.findOne({ _id: productId });
  return <EditProductPage data={JSON.parse(JSON.stringify(product))} />;
}

export default EditProduct;
