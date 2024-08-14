import CardProduct from "@/organisms/common/CardProduct";
import { NoData } from "@/utils/svg";

function ProductsPage({ products }) {
  return (
    <>
      {products.length ? (
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-5">
          {products.map((i) => (
            <CardProduct key={i._id} data={i} />
          ))}
        </div>
      ) : (
        <div className="relative w-full h-full flex flex-col items-center justify-center">
          <NoData className="w-full h-full lg:w-1/2 lg:h-1/2" />
          <h1 className="absolute top-10 text-2xl font-bold">
            هیچ موردی یافت نشد؟!
          </h1>
        </div>
      )}
    </>
  );
}

export default ProductsPage;
