import Table from '@/ui/Table';
import { toPersianDigits } from '@/utils/numberFormatter';
import { toLocalDateShort } from '@/utils/toLocalDateShort';
import truncateText from '@/utils/truncateText';


const UserRow = ({user,index}) => {
    const {name,email,createdAt} = user
    const {TableRow} = Table
    return (
        <TableRow>
            <td>{toPersianDigits(index+1)}</td>
            <td>{truncateText(name,30)}</td>
            <td>{truncateText(email,100)}</td>
             <td>{toLocalDateShort(createdAt)}</td>
        </TableRow>
    );
};

export default UserRow;