"use client";

import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { useAddImages } from "src/hooks/useQuery/mutations";
import Loader from "src/components/atoms/Loader";
import CustomImage from "@/atoms/CustomImage";
import toast from "react-hot-toast";
import {
  ExclamationCircleIcon,
  PhotoIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

function AddImage({ form, setForm }) {
  const { isPending, isError, mutateAsync } = useAddImages();

  // function to upload a photo inside uploadCare
  const imageChangeHandler = async (e) => {
    const images = Object.values(e.target.files);
    images.map(async (file) => {
      const data = await mutateAsync(file);

      !isError
        ? setForm((form) => ({
            ...form,
            images: [...form.images, data.cdnUrl],
          }))
        : toast.error("مشکلی در افزودن عکس پیش آمده است.");
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
  };

  return (
    <div>
      <div>
        <h1 className="font-bold mb-2"> عکس</h1>
        <div className="flex items-start sm:items-center gap-1">
          <ExclamationCircleIcon className="text-red-500 w-5 h-5" />
          <p className="text-zinc-700 dark:text-white text-xs md:text-sm font-bold">
            برای نمایش بهتر عکس ها بهتر است سایز آنها حداکثر
            <span className="text-red-400 px-2">500x500</span> و حجم عکس حداکثر
            <span className="text-red-400 px-2">1MG</span> باشد.
          </p>
        </div>
      </div>
      <div className="flex sm:flex-wrap gap-2 sm:gap-4 items-center w-full min-h-44 py-5 sm:h-auto overflow-x-auto">
        <div className="group">
          <input
            name="images"
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
            {isPending ? (
              <Loader color="bg-red-500" size={2} />
            ) : (
              <div>
                <PhotoIcon className="size-10 text-zinc-400 opacity-50 dark:text-zinc-600 group-hover:opacity-100 transition-all" />
                <PlusCircleIcon className="size-5 absolute top-9 right-9 text-red-500 opacity-50 group-hover:opacity-100 transition-all" />
              </div>
            )}
          </label>
        </div>

        {form?.images.map((img, index) => (
          <div
            onClick={() => setMainImgHandler(index)}
            key={index}
            className={`relative group min-h-32 min-w-32 border-2 flex items-center justify-center rounded-lg p-2 ${
              !index
                ? "after-img border-2 border-orange-300"
                : "border-zinc-300 dark:border-zinc-600"
            }`}
          >
            <CustomImage
              src={img}
              width={100}
              height={100}
              className="transition-opacity opacity-0 duration-[1s]"
              alt="product image"
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
