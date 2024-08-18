"use client";

import { DevelopingIcon } from "@/utils/svg";
import { useRouter } from "next/navigation";

function DevelopingPage() {
  const { back } = useRouter();
  return (
    <div className="h-screen flex flex-col items-center mt-16 sm:mt-0 justify-start sm:justify-center gap-5">
      <DevelopingIcon />
      <h1 className="font-bold text-sm md:text-lg">
        این صفحه در حال توسعه میباشد و در دسترس نمیباشد.
      </h1>
      <button
        className="bg-inherit flex items-center gap-3 text-yellow-500 border-2 border-yellow-500 px-5 py-2 rounded-lg"
        onClick={() => back()}
      >
        برگشت به صفحه قبل
      </button>
    </div>
  );
}

export default DevelopingPage;
