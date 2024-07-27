import React from "react";
import { Logo } from "@/utils/svg";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { roleColorMap } from "@/constants/dashboard";
import { useQueryClient } from "@tanstack/react-query";
import { PhotoIcon } from "@heroicons/react/24/outline";
import { Avatar, Spinner, Tooltip } from "@nextui-org/react";
import {
  useAddImages,
  useChangeAvatarUser,
} from "src/hooks/useQuery/mutations";

function AddAvatarCustom({ user, role }) {
  const queryClient = useQueryClient();
  const { refresh } = useRouter();
  const {
    isPending: isPendingAddImage,
    isError: isErrorAddImage,
    mutateAsync: mutateAsyncAddImage,
  } = useAddImages();

  const {
    isPending: isPendingChangeAvatar,
    isError: isErrorChangeAvatar,
    mutateAsync: mutateAsyncChangeAvatar,
  } = useChangeAvatarUser(queryClient);

  const changeAvatarHandler = async (e, id) => {
    const img = Object.values(e.target.files)[0];

    const res = await mutateAsyncAddImage(img);
    if (isErrorAddImage) return toast.error("عکس پروفایل با موفقیت اضافه نشد.");
    const { data } = await mutateAsyncChangeAvatar({ id, img: res.cdnUrl });
    if (isErrorChangeAvatar) {
      toast.error(data.data.error);
    } else {
      toast.success(data.message);
      refresh();
    }
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
        color={roleColorMap[role]}
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
