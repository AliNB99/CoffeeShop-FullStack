"use client";

import ProductsSkeleton from "@/organisms/product/ProductsSkeleton";
import CategorySidebar from "@/organisms/product/CategorySidebar";
import { usePathname } from "next/navigation";
import CustomLoading from "@/molecules/common/CustomLoading";

function LoadingProducts() {
  const pathName = usePathname();
  const pathNameSplit = pathName.split("/");
  if (pathNameSplit.length > 2) return <CustomLoading />;

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
