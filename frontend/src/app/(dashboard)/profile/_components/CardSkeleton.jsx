import React from "react";
import Skeleton from "react-loading-skeleton";

const CardSkeleton = () => {
  return (
    <Skeleton
      containerClassName="w-full grid grid-cols-12 gap-6 mb-8"
      height={200}
      className="col-span-12 md:col-span-3 w-full  md:w-[250px] lg:w-[350px] rounded-md bg-secondary-900/10"
      count={3}
    />
  );
};

export default CardSkeleton;
