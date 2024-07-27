import TitlePage from "@/atoms/TitlePage";
import ProductsTable from "@/organisms/admin/ProductsTable";

function ProductsListPage({ products }) {
  return (
    <div className="admin-page">
      <TitlePage color="text-violet-700" borderColor="border-violet-700">
        جدول مدیریت محصولات
      </TitlePage>
      <ProductsTable />
    </div>
  );
}

export default ProductsListPage;
