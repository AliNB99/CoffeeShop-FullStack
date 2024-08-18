"use client";

import Loader from "@/atoms/Loader";
import { User } from "@nextui-org/react";
import { StarIcon } from "@heroicons/react/24/solid";
import ReactStars from "react-rating-stars-component";
import TitleDescription from "@/atoms/TitleDescription";
import { useGetCommentsProduct } from "src/hooks/useQuery/queries";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";

function ProductComments({ productId }) {
  const { data, isPending } = useGetCommentsProduct(productId);
  return (
    <div className="bg-white dark:bg-zinc-900 p-4 rounded-2xl shadow-medium space-y-4">
      <TitleDescription title="دیدگاه کاربران" />
      {isPending ? (
        <div className="py-10">
          <Loader color="#fdba74" />
        </div>
      ) : data.data.comments.length ? (
        data.data.comments.map((i, index) => (
          <div key={index} className="p-3 rounded-xl space-y-3">
            <div className="flex justify-between items-center">
              <User
                name={`${i.userInfo.firstName} ${i.userInfo.lastName}`}
                description={new Date(i.createdAt).toLocaleDateString("fa")}
                avatarProps={{
                  src: i.userInfo.avatar,
                  size: "md",
                }}
              />
              <ReactStars
                edit={false}
                color="#b2b2b2"
                count={5}
                value={i.rate}
                char={<StarIcon className="w-4 h-4" />}
                emptyIcon={<i className="far fa-star"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
              />
            </div>
            <p className="bg-zinc-100/50 dark:bg-zinc-700 mr-7 border-1 shadow border-zinc-200 dark:border-none rounded-2xl rounded-tr-none p-4">
              {i.description}
            </p>
          </div>
        ))
      ) : (
        <div className="p-10 flex flex-col items-center justify-center">
          <ChatBubbleLeftRightIcon className="w-20 h-20 opacity-40" />
          <h1 className="opacity-50 font-bold">
            دیدگاهی برای این محصول ثبت نشده!!
          </h1>
        </div>
      )}
    </div>
  );
}

export default ProductComments;
