import Author from "./Author";
import CoverImage from "./CoverImage";

function RelatedPost({ posts }) {
  return (
    <div className=" mb-10">
      <p className="text-xl mb-4">پست های مرتبط</p>
      <div className="grid gap-6 grid-cols-12">
        {posts.map((item) => {
          return (
            <div
              key={item._id}
              className="col-span-12 sm:col-span-6 md:col-span-4"
            >
              <CoverImage {...item} />
              <div className="flex items-center justify-between">
                <p
                  className={`${
                    item.title.length > 12 ? "truncate text-sm" : "text-sm"
                  }`}
                >
                  {item.title.substr(0, 15)}
                </p>
                <Author {...item.author} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default RelatedPost;
