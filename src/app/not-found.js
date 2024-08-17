import { NotFoundPage } from "@/utils/svg";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-4 font-bold">
      <NotFoundPage className="w-96 h-96" />
      <h1>صفحه ای که به دنبال آن میگردید یافت نشد!!</h1>
      <Link
        href="/"
        className="bg-inherit flex items-center gap-3 text-yellow-500 border-2 border-yellow-500 px-5 py-2 rounded-lg"
      >
        بازگشت به خانه
        <ArrowLeftIcon />
      </Link>
    </div>
  );
}

export default NotFound;
