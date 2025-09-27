import { getAllCommentsApi } from '@/services/commentService';
import Empty from '@/ui/Empty';
import Table from '@/ui/Table';
import setCookiesOnReq from '@/utils/setCookiesOnReq';
import { cookies } from 'next/headers';
import CommentRow from './CommentRow';

const CommentsTable = async() => {
    const {TableHeader,TableBody} = Table
    const cookieStore = await cookies();
    const options = setCookiesOnReq(cookieStore);
    const {comments} = await getAllCommentsApi(options);
    if(!comments.length) return <Empty resourceName={"نظری"}/> 
    return (
        <Table>
            <TableHeader>
                <th>#</th>
                <th>نام</th>
                <th>نظر</th>
                <th>تاریخ ایجاد</th>
            </TableHeader>
           <TableBody>
           {comments.map((comment,index)=>(
                <CommentRow index={index} key={comment._id} comment={comment}/> 
            ))}
           </TableBody>
        </Table>
    );
};

export default CommentsTable;