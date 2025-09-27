import React, { Suspense } from "react";
import PostsTable from "./_/components/PostsTable";
import TableSkeleton from "../_components/TableSkeleton";
import Search from "@/ui/Search";
import { CreatePost } from "./_/components/Buttons";
import queryString from "query-string";
import { getPosts } from "@/services/postServices";
import Pagination from "@/ui/Pagination";

const page = async({searchParams}) => {
    const query = queryString.stringify(searchParams)
    const {totalPages} = await getPosts(query)
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 text-secondary-700 gap-8 mb-12 items-center">
        <h1 className="text-xl font-bold mb-4 text-secondary-700">
          لیست پست ها
        </h1>
        <Search />
        <CreatePost />
      </div>
      <Suspense fallback={<TableSkeleton height={400}  key={query}  />}>
        <PostsTable query={query}  />
      </Suspense>
      <div className="flex items-center mt-5">
        <Pagination totalPages={totalPages}/>
      </div>
    </div>
  );
};

export default page;
