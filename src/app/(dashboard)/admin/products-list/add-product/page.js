import TitlePage from "@/atoms/TitlePage";
import ProductForm from "@/organisms/common/ProductForm";
import React from "react";

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
