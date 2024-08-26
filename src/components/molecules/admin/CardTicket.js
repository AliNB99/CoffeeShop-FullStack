import { EyeIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ticketBorderColorMap = {
  orderTracking: "border-green-400",
  finance: "border-blue-400",
  returns: "border-red-400",
};

function CardTicket({ title, message, category }) {
  return (
    <div
      className={`border-2 ${ticketBorderColorMap[category]} p-2 rounded-xl space-y-2`}
    >
      <h4 className="max-h-10 text-sm whitespace-nowrap overflow-hidden text-ellipsis">
        {title}
      </h4>
      <p className="text-xs text-zinc-400 max-h-20 whitespace-wrap overflow-hidden text-ellipsis leading-5">
        {message}
      </p>
      <div className="flex items-center justify-end gap-3">
        <Link
          className="w-fit h-fit block bg-zinc-100 dark:bg-zinc-600 p-1 rounded-lg"
          href="/admin"
        >
          <EyeIcon />
        </Link>
        <Link
          className="w-fit h-fit block bg-zinc-100 dark:bg-zinc-600 p-1 rounded-lg"
          href="/admin"
        >
          <XMarkIcon className="text-red-400" />
        </Link>
      </div>
    </div>
  );
}

export default CardTicket;
