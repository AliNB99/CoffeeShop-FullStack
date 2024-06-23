import ProsAndCons from "@/molecules/product/ProsAndCons";
import { Logo } from "@/utils/svg";
import {
  HandThumbDownIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/outline";

function ProductDescription({ description, advantages, disadvantages }) {
  return (
    <div className="bg-white dark:bg-zinc-900 p-4 rounded-2xl shadow-medium">
      <div className="text-orange-300 w-1/2 flex items-center gap-2 border-b-2 p-2 border-orange-300 font-Morabba text-2xl font-medium">
        <Logo />
        <h4>توضیحات</h4>
      </div>
      <div className="p-4 space-y-10">
        <p className="leading-10 text-justify">{description}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <ProsAndCons
            title="مزایای محصول"
            list={advantages}
            icon={<HandThumbUpIcon className="text-green-500" />}
            color="text-green-500"
          />
          <ProsAndCons
            title="معایب محصول"
            list={disadvantages}
            icon={<HandThumbDownIcon className="text-red-500" />}
            color="text-red-500"
          />
        </div>
      </div>
    </div>
  );
}

export default ProductDescription;
