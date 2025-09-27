import Image from "next/image";
import Link from "next/link";
import React from "react";

const CoverImage = ({title,coverImageUrl,slug}) => {
  return (
    <div className="relative aspect-video  overflow-hidden rounded-md mb-6">
      <Link href={`/blogs/${slug}`}>
      <Image
        className="object-cover object-center transition-all ease-in-out duration-300 hover:scale-110"
        src={coverImageUrl}
        fill
        alt={title}
        quality={60}
      />
      </Link>
    </div>
  );
};

export default CoverImage;
