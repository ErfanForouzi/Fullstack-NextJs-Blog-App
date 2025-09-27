import Skeleton from "react-loading-skeleton";

const SkeletonPost = () => {
  return (
     <Skeleton
    containerClassName="flex flex-wrap w-full gap-4 justify-start"
    height={250}
    className="w-full sm:w-[280px] md:w-[330px] lg:w-[300px] xl:w-[280px] rounded-md bg-secondary-900/10"
    count={6}
  />
  );
};
export default SkeletonPost;
