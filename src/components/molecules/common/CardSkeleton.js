import Skeleton from "@/atoms/Skeleton";

function CardSkeleton() {
  return (
    <div className="rounded-2xl shadow-normal p-2 md:p-5">
      <div className="w-full h-32 lg:w-full lg:h-64 mb-9">
        <Skeleton height="100%" width="100%" />
      </div>
      <div className="mb-7 space-y-2">
        <Skeleton height={30} width="80%" />
        <Skeleton height={20} width="60%" />
      </div>
      <div className="flex items-center justify-between">
        <Skeleton height={30} width={30} />
        <Skeleton height={30} width="20%" />
      </div>
    </div>
  );
}

export default CardSkeleton;
