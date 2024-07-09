"use client";

import TitlePage from "@/atoms/TitlePage";
import DataTable from "@/organisms/common/DataTable";

function AllProductsPage({ products }) {
  return (
    <div className="w-full mt-5 space-y-3 px-4">
      <TitlePage color="text-indigo-400" borderColor="border-indigo-400">
        جدول مدیریت محصولات
      </TitlePage>
      <DataTable products={products} />
    </div>
  );
}

export default AllProductsPage;
