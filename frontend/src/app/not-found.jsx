"use client";
import useMoveBack from "@/hooks/useMoveBack";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

function NotFound() {
  const moveBack = useMoveBack();

  return (
    <div className="container xl:max-w-screen-xl">
      <div className="flex flex-col items-center justify-center gap-y-10 pt-10">
          <Image
            className="rounded-xl shadow-sm border-t-2"
            src={"/images/not-found.jpg"}
            width={250}
            height={100}
            alt="not found"
          />
          <h1 className="text-xl font-bold text-secondary-700">
            صفحه ای که دنبالش بودید، پیدا نشد
          </h1>
          <button
            onClick={moveBack}
            className="flex items-center gap-x-2 bg-primary-900 text-white px-3 py-2 rounded-lg"
          >
            <ArrowRightIcon className="w-6 h-6 text-white" />
            <span> برگشت</span>
          </button>
      </div>
    </div>
  );
}
export default NotFound;
