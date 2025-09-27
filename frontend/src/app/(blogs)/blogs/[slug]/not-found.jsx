import Link from "next/link";

function NotFound() {
  return (
    <div className="container xl:max-w-screen-xl">
      <div className="flex justify-center pt-10">
        <div>
          <p className="text-2xl font-semibold text-secondary-500 mb-8">
            😥هیچ پستی با این مشخصات یافت نشد😥
          </p>
          <Link href="/blogs" className="bg-primary-900 text-lg font-bold text-center text-white py-2 rounded-md">
            رفتن به صفحه پست؟
          </Link>
        </div>
      </div>
    </div>
  );
}
export default NotFound;
