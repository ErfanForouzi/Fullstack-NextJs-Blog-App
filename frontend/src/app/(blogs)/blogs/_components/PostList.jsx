import { ClockIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Author from "./Author";
import CoverImage from "./CoverImage";
import PostInteraction from "./PostInteraction";
import { toPersianDigits } from "@/utils/numberFormatter";

async function PostList({posts}) {

  return posts.length > 0 ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3.5 md:gap-5">
      {posts.map((post) => (
        <div
          className="border border-secondary-100 p-2 rounded-lg shadow-md"
          key={post._id}
        >
          <CoverImage {...post} />

          <div>
            <Link href={`/blogs/${post.slug}`}>
              <h2 className="text-secondary-700 font-bold">{post.title}</h2>
            </Link>

            <div className="flex items-center justify-between my-4">
              <Author {...post.author} />
              <div className="flex items-center text-secondary-500 text-xs gap-x-1">
                <ClockIcon className="w-4 h-4 stroke-secondary-500" />
                <span>خواندن :</span>
                <span className="leading-3">
                  {toPersianDigits(post.readingTime)}
                </span>
                <span>دقیقه</span>
              </div>
            </div>
            <PostInteraction post={post} />
          </div>
        </div>
      ))}
    </div>
  ) : null;
}
export default PostList;
