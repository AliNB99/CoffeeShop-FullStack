import {
  ExclamationCircleIcon,
  PhotoIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

import { PlusCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import Loader from "src/components/atoms/Loader";

function AddImage({ form, setForm }) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // function to upload a photo inside imgBB
  const imageChangeHandler = (e) => {
    // API KEY
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    const images = Object.values(e.target.files);
    images.map(async (file) => {
      const formData = new FormData();
      formData.append("image", file);
      try {
        setIsLoading(true);
        const res = await fetch(
          `https://api.imgbb.com/1/upload?key=${apiKey}`,
          {
            method: "POST",
            body: formData,
          }
        );
        setIsLoading(false);
        const data = await res.json();
        console.log(data.data.url);
        setForm((form) => ({
          ...form,
          images: [...form.images, data.data.url],
        }));
      } catch (error) {
        setIsLoading(false);
        toast.error("مشکلی در ارسال عکس ها پیش آمده است");
      }
    });
  };

  const deleteHandler = (e, index) => {
    e.stopPropagation();
    const newImages = [...form.images];
    newImages.splice(index, 1);
    setForm({ ...form, images: newImages });
  };

  const setMainImgHandler = (index) => {
    const newImages = [...form.images];
    const item = newImages.splice(index, 1)[0];
    newImages.unshift(item);
    setForm({ ...form, images: newImages });
    router.refresh();
  };

  return (
    <div>
      <div>
        <h1 className="font-bold mb-2"> عکس</h1>
        <div className="flex items-start sm:items-center gap-2">
          <ExclamationCircleIcon className="text-red-500 w-6 h-6" />

          <p className="text-zinc-700 dark:text-white text-xs md:text-sm font-bold">
            به دلیل محدودیت برای کاربران ایرانی در سایت imgBB لطفا قبل از آپلود
            عکس فیلتر شکن خود را روشن نمایید
          </p>
        </div>
      </div>
      <div className="flex sm:flex-wrap gap-2 sm:gap-4 items-center w-full min-h-44 py-5 sm:h-auto overflow-x-auto">
        <div className="group">
          <input
            id="file"
            type="file"
            className="hidden"
            multiple
            onChange={imageChangeHandler}
          />
          <label
            htmlFor="file"
            className="relative flex items-center justify-center border-2 border-zinc-300 dark:border-zinc-600 group-hover:border-zinc-400 cursor-pointer border-dashed h-32 w-32 rounded-lg transition-all"
          >
            {isLoading ? (
              <Loader color="#EF4444" size={10} />
            ) : (
              <div>
                <PhotoIcon className="size-10 text-zinc-400 opacity-50 dark:text-zinc-600 group-hover:opacity-100 transition-all" />
                <PlusCircleIcon className="size-5 absolute top-9 right-9 opacity-50 text-red-500 group-hover:opacity-100 transition-all" />
              </div>
            )}
          </label>
        </div>

        {form?.images.map((img, index) => (
          <div
            onClick={() => setMainImgHandler(index)}
            key={index}
            className={`relative group min-h-32 min-w-32 border-2 ${
              !index
                ? "after-img border-2 border-orange-300"
                : "border-zinc-300 dark:border-zinc-600"
            } flex items-center justify-center rounded-lg p-2`}
          >
            <Image
              src={img}
              width={100}
              height={100}
              alt="image product"
              loading="lazy"
            />
            <button
              type="button"
              onClick={(e) => deleteHandler(e, index)}
              className="absolute hidden group-hover:block top-1 right-1 bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-950 p-1 rounded-md"
            >
              <TrashIcon className="w-4 h-4 text-zinc-600 dark:text-zinc-500" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AddImage;
