import ProductForm from "@/organisms/common/ProductForm";
import TitlePage from "@/atoms/TitlePage";

function AddProduct() {
  return (
    <div className="dashboard-page space-y-5">
      <TitlePage color="text-blue-500" borderColor="border-blue-500">
        ثبت محصول
      </TitlePage>
      <ProductForm />
    </div>
  );
}

export default AddProduct;
