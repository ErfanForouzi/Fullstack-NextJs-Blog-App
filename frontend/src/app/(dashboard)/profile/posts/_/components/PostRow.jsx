import Table from '@/ui/Table';
import { toPersianDigits } from '@/utils/numberFormatter';
import { toLocalDateShort } from '@/utils/toLocalDateShort';
import truncateText from '@/utils/truncateText';
import React from 'react';
import { DeletePost, UpdatePost } from './Buttons';


const typeStyle = {
    free:{
        label:"رایگان",
        className:"badge--success"
    },
    premium:{
 label:"پولی",
        className:"badge--secondary"
    }
}

const PostRow = ({post,index}) => {
    const {category,author,title,createdAt,type} = post
    const {TableRow} = Table
    return (
        <TableRow>
            <td>{toPersianDigits(index+1)}</td>
            <td>{truncateText(title,30)}</td>
            <td>{category?.title || ""}</td>
            <td>{author.name}</td>
            <td>{toLocalDateShort(createdAt)}</td>
            <td >
                <span className={`badge ${typeStyle[type].className}`}>
                {typeStyle[type].label}
                </span>
            </td>
            <td>
                <div className='flex items-center gap-x-2'>
                    <UpdatePost id={post._id}/>
                    <DeletePost post={post}/>
                </div>
            </td>
        </TableRow>
    );
};

export default PostRow;