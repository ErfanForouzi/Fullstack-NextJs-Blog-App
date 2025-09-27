import Table from '@/ui/Table';
import { toPersianDigits } from '@/utils/numberFormatter';
import { toLocalDateShort } from '@/utils/toLocalDateShort';
import truncateText from '@/utils/truncateText';


const CommentRow = ({comment,index}) => {
    const {content,user,createdAt} = comment
    const {TableRow} = Table
    return (
        <TableRow>
            <td>{toPersianDigits(index+1)}</td>
            <td>{truncateText(user?.name,30)}</td>
            <td>{truncateText(content?.text,100)}</td>
             <td>{toLocalDateShort(createdAt)}</td>
        </TableRow>
    );
};

export default CommentRow;