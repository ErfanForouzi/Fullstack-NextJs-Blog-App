import { getPosts } from "@/services/postServices";
import { toPersianDigits } from "@/utils/numberFormatter";
import setCookiesOnReq from "@/utils/setCookiesOnReq";
import { cookies } from "next/headers";
import queryString from "query-string";
import PostList from "../../../_components/PostList";

const Category = async ({ params, searchParams }) => {
  await new Promise((resolve)=>setTimeout(() => {
    resolve()
  }, 1000))
  const { categorySlug } = await params;

  const queries =
    queryString.stringify(await searchParams) +
    "&" +
    `categorySlug=${categorySlug}`;
  const cookieStore = await cookies();
  const options = setCookiesOnReq(cookieStore);
  const { posts } = await getPosts(queries, options);
  const { search } = await searchParams;

  return (
    <>
      {search ? (
        <div className="mb-4 text-secondary-600 flex gap-x-1 items-center">
          {posts.length === 0 ? (
            "هیچ پستی با این مشخصات یافت نشد"
          ) : (
            <div className="flex gap-x-1 items-center">
              <span>نشان دادن</span>
              <b>({toPersianDigits(posts.length)})</b>
              <span>نتیجه برای</span>
            </div>
          )}
          <span className="font-bold">&quot;{search}&quot;</span>
        </div>
      ) : null}
        <PostList posts={posts} />
    </>
  );
};
export default Category;
