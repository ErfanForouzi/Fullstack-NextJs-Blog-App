"use client";

import { useEffect } from "react";

function Error({ error, reset }) {
  useEffect(()=>{
    console.log(error);
  },[error])
  return (
    <div className="container xl:max-w-screen-xl">
      <div className="flex justify-center pt-10">
        <div>
          <h4 className="text-xl font-bold text-red-500 mb-8">{error.message}</h4>
          <button
            onClick={reset}
            className="flex items-center gap-x-2 bg-red-500 px-3 py-2 text-white rounded-md"
          >
            تلاش مجدد
          </button>
        </div>
      </div>
    </div>
  );
}
export default Error;
