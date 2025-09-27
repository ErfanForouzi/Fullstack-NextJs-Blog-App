import { getAllUsersApi } from '@/services/authService';
import Empty from '@/ui/Empty';
import Table from '@/ui/Table';
import setCookiesOnReq from '@/utils/setCookiesOnReq';
import { cookies } from 'next/headers';
import UserRow from './UserRow';

const UsersTable = async() => {
    const {TableHeader,TableBody} = Table
    const cookieStore = await cookies();
    const options = setCookiesOnReq(cookieStore);
    const {users} = await getAllUsersApi(options);
    if(!users.length) return <Empty resourceName={"کاربری"}/> 
    return (
        <Table>
            <TableHeader>
                <th>#</th>
                <th>نام</th>
                <th>ایمیل</th>
                <th>تاریخ ایجاد</th>
            </TableHeader>
           <TableBody>
           {users.map((user,index)=>(
                <UserRow index={index} key={user._id} user={user}/> 
            ))}
           </TableBody>
        </Table>
    );
};

export default UsersTable;