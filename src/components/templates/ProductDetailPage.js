import { LogoType } from "@/utils/svg";
import SliderProductImage from "@/molecules/common/SliderProductImage";
import CardProductDetails from "@/organisms/product/CardProductDetails";
import ProductDescription from "@/organisms/product/ProductDescription";
import AddComment from "@/organisms/product/AddComment";
import ProductComments from "@/organisms/product/ProductComments";

function ProductDetailPage({ product, user }) {
  const {
    _id,
    title,
    description,
    images,
    advantages,
    disadvantages,
    specifications,
  } = product;

  return (
    <section className="space-top space-y-16">
      {/* details content */}
      <div className="flex flex-col lg:flex-row gap-5">
        {/* show slider image */}
        {!!images.length ? (
          <div className="w-full lg:max-w-72 xl:max-w-80 p-2 bg-white dark:bg-zinc-900 rounded-2xl shadow-medium">
            <SliderProductImage images={images} />
          </div>
        ) : (
          <div className="w-full lg:w-72 xl:w-96 p-2 hidden xl:flex justify-center items-center bg-white dark:bg-zinc-900 rounded-2xl shadow-medium">
            <LogoType className="w-fit h-32 lg:w-52 lg:h-64 opacity-20" />
          </div>
        )}

        {/* content and add Cart */}
        <div className="flex flex-col lg:flex-row gap-5 bg-white w-full dark:bg-zinc-900 rounded-2xl p-4 shadow-medium">
          {/* content title and details product */}
          <div className="flex-grow p-2">
            <h2
              title={title}
              className="font-bold text-2xl lg:w-[300px] xl:w-[500px] truncate-multiline"
            >
              {title}
            </h2>
            <h4
              className="text-lg mt-5 mb-1 font-medium text-orange-300
          "
            >
              مشخصات
            </h4>
            <ul className="scrollbarCustom w-full p-3 h-64 child:flex child:justify-between overflow-y-auto child:p-3 divide-y-2 dark:divide-zinc-800">
              {specifications.map((i, index) => (
                <li key={index}>
                  <span className="font-bold">{i.title}</span>
                  <span className="text-zinc-600 dark:text-zinc-400">
                    {i.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          {/* price and Btb add product */}
          <CardProductDetails product={product} />
        </div>
      </div>
      {/* Description */}
      <ProductDescription
        description={description}
        advantages={advantages}
        disadvantages={disadvantages}
      />
      <AddComment user={user} product={product} />
      <ProductComments productId={_id} />
    </section>
  );
}

export default ProductDetailPage;
