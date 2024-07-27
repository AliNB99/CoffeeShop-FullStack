import { ShoppingBagIcon, XMarkIcon } from "@heroicons/react/24/outline";

function SidebarCart({ showElement, onShowElement }) {
  return (
    <nav
      className={`fixed ${
        showElement.cartSidebar ? "left-0" : "-left-64"
      } top-0 p-4 bg-white dark:bg-zinc-700 w-64 h-screen overflow-y-auto z-20 transition-all`}
    >
      <div className="flex items-center justify-between pb-5 border-b border-gray-200 dark:border-b-white/20">
        <button
          onClick={() => onShowElement({ element: "cartSidebar" })}
          className="bg-zinc-100 dark:bg-zinc-600/50 rounded-full p-1 transition-all"
        >
          <XMarkIcon className="text-zinc-600 dark:text-white" />
        </button>
        <h4 className="font-medium">سبد خرید</h4>
      </div>
      <div className="h-96 flex flex-col items-center justify-center gap-3">
        <ShoppingBagIcon className="size-10 text-zinc-400" />
        <p className="text-xs font-medium">
          هنوز محصولی به سبد خرید اضافه نشده
        </p>
      </div>
    </nav>
  );
}

export default SidebarCart;
