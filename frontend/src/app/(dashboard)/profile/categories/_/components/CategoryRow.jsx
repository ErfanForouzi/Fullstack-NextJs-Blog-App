import Table from '@/ui/Table';
import { toPersianDigits } from '@/utils/numberFormatter';
import { toLocalDateShort } from '@/utils/toLocalDateShort';
import truncateText from '@/utils/truncateText';
import React from 'react';
import { DeleteCategory, UpdateCategory,CreateCategory } from './Buttons';


const CategoryRow = ({category,index}) => {
    const {slug,englishTitle,description,title,createdAt} = category
    const {TableRow} = Table
    return (
        <TableRow>
            <td>{toPersianDigits(index+1)}</td>
            <td>{truncateText(title,30)}</td>
            <td>{truncateText(description,30)}</td>
            <td>{slug}</td>
            <td>{truncateText(englishTitle,30)}</td>
            <td>{toLocalDateShort(createdAt)}</td>
            <td>
                <div className='flex items-center gap-x-2'>
                    <UpdateCategory id={category._id}/>
                    <DeleteCategory category={category}/>
                </div>
            </td>
        </TableRow>
    );
};

export default CategoryRow;