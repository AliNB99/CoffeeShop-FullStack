import ProductForm from "@/organisms/common/ProductForm";
import TitlePage from "@/atoms/TitlePage";

function EditProductPage({ data }) {
  return (
    <div className="dashboard-page space-y-5">
      <TitlePage color="text-green-500" borderColor="border-green-500">
        ویرایش محصول
      </TitlePage>
      <ProductForm product={data} />
    </div>
  );
}

export default EditProductPage;
