import { Suspense } from "react";
import TableSkeleton from "../_components/TableSkeleton";
import CommentsTable from "./_/components/CommentsTable";

const page = async () => {

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 text-secondary-700 gap-8 mb-12 items-center">
        <h1 className="text-xl font-bold mb-4 text-secondary-700">
          لیست نظر ها
        </h1>
      </div>
      <Suspense fallback={<TableSkeleton height={400} />}>
        <CommentsTable   />
      </Suspense>
    </div>
  );
};

export default page;
