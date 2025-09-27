import { getPosts } from '@/services/postServices';
import Empty from '@/ui/Empty';
import Table from '@/ui/Table';
import React from 'react';
import PostRow from './PostRow';

const PostsTable = async({query}) => {
    const {TableHeader,TableBody} = Table
    const {posts} = await getPosts(query)
    if(!posts.length) return <Empty resourceName={"پستی"}/> 
    return (
        <Table>
            <TableHeader>
                <th>#</th>
                <th>عنوان</th>
                <th>دسته بندی</th>
                <th>نویسنده</th>
                <th>تاریخ ایجاد</th>
                <th>نوع</th>
                <th>عملیات</th>
            </TableHeader>
           <TableBody>
           {posts.map((post,index)=>(
                <PostRow index={index} key={post._id} post={post}/> 
            ))}
           </TableBody>
        </Table>
    );
};

export default PostsTable;