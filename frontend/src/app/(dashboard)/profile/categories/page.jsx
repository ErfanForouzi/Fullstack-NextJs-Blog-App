import queryString from "query-string";
import { Suspense } from "react";
import TableSkeleton from "../_components/TableSkeleton";
import { CreateCategory } from "./_/components/Buttons";
import CategoryTable from "./_/components/CategoryTable";

const page = async({searchParams}) => {
    const query = queryString.stringify(searchParams)
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 text-secondary-700 gap-8 mb-12 items-center">
        <h1 className="col-span-1 text-xl font-bold mb-4 text-secondary-700">
          لیست دسته بندی ها
        </h1>
        <CreateCategory/>
      </div>
      <Suspense fallback={<TableSkeleton height={400}  key={query}  />}>
        <CategoryTable query={query}  />
      </Suspense>
      
    </div>
  );
};

export default page;
