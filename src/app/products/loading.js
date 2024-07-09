import CategorySidebar from "@/organisms/product/CategorySidebar";
import ProductsSkeleton from "@/organisms/product/ProductsSkeleton";

function LoadingProducts() {
  return (
    <main className="space-top">
      <div className="flex flex-col gap-5 xl:flex-row">
        <CategorySidebar />
        <ProductsSkeleton />
      </div>
    </main>
  );
}
export default LoadingProducts;
