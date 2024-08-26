import CardProductBasket from "../common/CardProductBasket";

function SelectedProductsList({ cart }) {
  return (
    <div className="w-full h-fit flex flex-col gap-3 bg-white dark:bg-zinc-700 p-3 shadow-medium rounded-lg">
      <h1 className="w-1/2 text-orange-300 text-sm font-bold border-b-2 border-orange-300 px-1 pb-2">
        محصولات انتخابی شما
      </h1>
      {cart.selectedItems.map((p, index) => (
        <div
          key={index}
          className="border-2 dark:border-zinc-600 p-2 rounded-lg"
        >
          <CardProductBasket product={p} cartPage />
        </div>
      ))}
    </div>
  );
}

export default SelectedProductsList;
