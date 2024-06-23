import ProductForm from "@/organisms/common/ProductForm";

async function EditProductPage({ data }) {
  return <ProductForm product={data} />;
}

export default EditProductPage;
