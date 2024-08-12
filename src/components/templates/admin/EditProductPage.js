import TitlePage from "@/atoms/TitlePage";
import ProductForm from "@/organisms/common/ProductForm";

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
