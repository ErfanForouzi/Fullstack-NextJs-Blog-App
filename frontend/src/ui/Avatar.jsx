import Image from 'next/image';
import React from 'react';

const Avatar = ({width=24,height=24,src}) => {
    return (
        <Image
        width={width}
        height={height}
        className="rounded-full ring-1 ring-secondary-300 ml-2"
        src={src || "/images/avatar.png"}
        alt='Avatar'
      />
    );
};

export default Avatar;