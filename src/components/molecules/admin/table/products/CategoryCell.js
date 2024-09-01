const productCategoryStyleMap = {
  coffee: {
    title: "قهوه",
    color: "text-orange-400",
    bgColor: "bg-orange-100",
  },
  accessory: {
    title: "لوازم جانبی",
    color: "text-purple-500",
    bgColor: "bg-purple-100",
  },
};

function CategoryCell({
  cell: {
    row: { original },
  },
}) {
  return (
    <div className="flex items-center justify-center w-full">
      <span
        className={`${productCategoryStyleMap[original.category].color} ${
          productCategoryStyleMap[original.category].bgColor
        } rounded-xl px-3 py-1 text-xs font-bold`}
      >
        {productCategoryStyleMap[original.category].title}
      </span>
    </div>
  );
}

export default CategoryCell;
