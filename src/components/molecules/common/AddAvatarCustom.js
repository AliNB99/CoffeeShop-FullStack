import { Avatar, Spinner, Tooltip } from "@nextui-org/react";
import { roleColorMap } from "@/constants/dashboardItem";
import { PhotoIcon } from "@heroicons/react/24/outline";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { Logo } from "@/utils/svg";
import toast from "react-hot-toast";
import React from "react";
import {
  useAddImages,
  useChangeDataAvatarUser,
} from "src/hooks/useQuery/mutations";

function AddAvatarCustom({ user }) {
  const queryClient = useQueryClient();
  const { refresh } = useRouter();
  const {
    isPending: isPendingAddImage,
    isError: isErrorAddImage,
    mutateAsync: mutateAsyncAddImage,
  } = useAddImages();

  const {
    isPending: isPendingChangeAvatar,
    mutateAsync: mutateAsyncChangeAvatar,
  } = useChangeDataAvatarUser(queryClient);

  const changeAvatarHandler = async (e, id) => {
    const img = Object.values(e.target.files)[0];

    const res = await mutateAsyncAddImage(img);
    if (isErrorAddImage) return toast.error("عکس پروفایل با موفقیت اضافه نشد.");
    await mutateAsyncChangeAvatar({ id, img: res.cdnUrl });
    refresh();
  };
  return (
    <div className="relative group">
      <Avatar
        src={user.avatar || ""}
        showFallback
        className="bg-inherit transition-opacity duration-[1s] group-hover:opacity-30"
        icon={
          <Logo className="size-8 opacity-50 text-zinc-700 dark:text-white" />
        }
        size="lg"
        onLoad={(img) => img.target.classList.remove("opacity-0")}
        isBordered
        color={roleColorMap[user.role]}
      />
      <div className="absolute flex items-center justify-center top-0 w-full h-full">
        <Tooltip placement="left" content="تغییر عکس">
          {isPendingAddImage || isPendingChangeAvatar ? (
            <Spinner color={roleColorMap[user.role]} />
          ) : (
            <label
              className="cursor-pointer rounded-full bg-zinc-800/50 dark:bg-zinc-500/50 opacity-0 group-hover:opacity-100 w-full h-full flex items-center justify-center transition-all"
              htmlFor="choicePhoto"
            >
              <PhotoIcon className="size-6 text-white" />
            </label>
          )}
        </Tooltip>
      </div>
      <input
        onChange={(e) => changeAvatarHandler(e, user._id)}
        className="hidden"
        id="choicePhoto"
        type="file"
      />
    </div>
  );
}

export default AddAvatarCustom;
