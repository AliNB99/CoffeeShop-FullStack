import { Skeleton } from "@mui/material";

function CardSkeleton() {
  return (
    <div className="rounded-2xl shadow-normal p-2 md:p-5">
      <div className="w-full h-32 lg:w-full lg:h-64 mb-9">
        <Skeleton
          className="rounded-lg"
          height="100%"
          width="100%"
          animation="wave"
          variant="rectangular"
        />
      </div>
      <div className="mb-7 space-y-2">
        <Skeleton animation="wave" height={30} width="80%" />
        <Skeleton animation="wave" height={20} width="60%" />
      </div>
      <div className="flex items-center justify-between">
        <Skeleton animation="wave" height={30} width={30} />
        <Skeleton animation="wave" height={30} width="20%" />
      </div>
    </div>
  );
}

export default CardSkeleton;
