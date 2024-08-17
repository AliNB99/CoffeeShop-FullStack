import { NoData } from "@/utils/svg";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

function NotFoundProductPage() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-5 font-bold">
      <NoData className="w-[500px] h-[300px]" />
      <h1>محصولی که به دنبال آن هستید یافت نشد!!</h1>
      <Link
        href="/products"
        className="bg-inherit flex items-center gap-3 text-yellow-500 border-2 border-yellow-500 px-5 py-2 rounded-lg"
      >
        بازگشت به صفحه محصولات
        <ArrowLeftIcon />
      </Link>
    </div>
  );
}

export default NotFoundProductPage;
