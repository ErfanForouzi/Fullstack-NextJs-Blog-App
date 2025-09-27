import React from "react";
import Skeleton from "react-loading-skeleton";

const TableSkeleton = ({height}) => {
  return (
    <Skeleton
      containerClassName="grid grid-cols-12 gap-6 mb-8"
      height={height}
      className="col-span-12  rounded-md bg-secondary-900/10"
      count={1}
    />
  );
};

export default TableSkeleton;
