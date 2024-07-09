import CartSkeleton from "@/molecules/common/CartSkeleton";

function ProductsSkeleton() {
  return (
    <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-5">
      {Array.from({ length: 6 }).map((i, index) => (
        <CartSkeleton key={index} />
      ))}
    </div>
  );
}

export default ProductsSkeleton;
