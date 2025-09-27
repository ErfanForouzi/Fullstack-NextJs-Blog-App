import Empty from '@/ui/Empty';
import Table from '@/ui/Table';
import React from 'react';
import CategoryRow from './CategoryRow';
import { getCategoriesApi } from "@/services/categoryService";


const CategoryTable = async({query}) => {
    const {TableHeader,TableBody} = Table
    const {categories} = await getCategoriesApi(query)
    if(!categories.length) return <Empty resourceName={"دسته بندی"}/> 
    return (
        <Table>
            <TableHeader>
                <th>#</th>
                <th>عنوان</th>
                <th>توضیحات</th>
                <th>اسلاگ</th>
                <th>عنوان انگلیسی</th>
                <th>تاریخ ایجاد</th>
                <th>عملیات</th>
            </TableHeader>
           <TableBody>
           {categories.map((category,index)=>(
                <CategoryRow index={index} key={category._id} category={category}/> 
            ))}
           </TableBody>
        </Table>
    );
};

export default CategoryTable;