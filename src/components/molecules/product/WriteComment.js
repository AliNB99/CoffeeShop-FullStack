import { useSubmitComment } from "src/hooks/useQuery/mutations";
import { StarIcon } from "@heroicons/react/24/outline";
import ReactStars from "react-rating-stars-component";
import { User } from "@nextui-org/react";
import Button from "@/atoms/Button";
import toast from "react-hot-toast";
import Loader from "@/atoms/Loader";
import { useState } from "react";

function WriteComment({ user, product }) {
  const [comment, setComment] = useState({ description: "", rate: "" });
  const { isPending, isError, mutateAsync } = useSubmitComment();

  const submitCommentHandler = async () => {
    if (!comment.description || !comment.rate) {
      return toast.error("لطفا متن و امتیاز را وارد نمایید.");
    }

    const data = await mutateAsync({ product, user, comment });
    if (data.data.error || isError) {
      toast.error(data.data.error);
    } else {
      toast.success(data.data.message);
      setComment({ description: "", rate: "" });
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-7 p-4">
      <div className="flex flex-col items-start gap-7">
        <User
          name={`${user.firstName} ${user.lastName}`}
          description={user.email}
          avatarProps={{
            src: user.avatar,
            size: "lg",
          }}
        />
        <textarea
          maxLength={500}
          onChange={(e) =>
            setComment((i) => ({ ...i, description: e.target.value }))
          }
          value={comment.description}
          placeholder="لطفا دیدگاه خود را وارد نمایید ..."
          rows={5}
          className="w-full lg:w-[620px] p-2 border-2 border-zinc-300 dark:border-zinc-700 outline-blue-400 dark:outline-none rounded-lg transition-all"
        />
      </div>
      <div className="w-full flex flex-col gap-6 justify-between">
        <div className="flex flex-col gap-7 mt-3 items-center justify-center">
          <h4 className="font-medium text-base md:text-xl text-zinc-700 dark:text-white">
            شما به این محصول چند ستاره میدهید؟؟
          </h4>
          <ReactStars
            color="#b2b2b2"
            count={5}
            onChange={(rate) => setComment((i) => ({ ...i, rate }))}
            char={<StarIcon className="w-10 h-10" />}
            emptyIcon={<i className="far fa-star"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
          />
        </div>
        <div className="flex justify-end">
          {isPending ? (
            <Loader color="#3F85F6" size={10} />
          ) : (
            <Button
              clickHandler={submitCommentHandler}
              width="w-full"
              bgColor="bg-blue-100"
              color="text-blue-500"
            >
              ثبت دیدگاه
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default WriteComment;
