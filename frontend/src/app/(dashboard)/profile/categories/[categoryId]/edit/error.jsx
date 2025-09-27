"use client"
import { FaceFrownIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React, { useEffect } from 'react';

const error = ({error}) => {
    useEffect(()=>{
        console.log(error?.status);
    },[error])
    return (
        <main className="flex h-full flex-col items-center justify-center gap-2">
        <FaceFrownIcon className="w-10 text-secondary-400" />
        <p>دسته بندی با این مشخصات پیدا نشد</p>
        <Link
          href="/profile/posts"
          className="mt-4 rounded-md bg-primary-500 px-4 py-2 text-sm text-white transition-colors hover:bg-primary-400"
        >
          برگشت
        </Link>
      </main>
    );
};

export default error;