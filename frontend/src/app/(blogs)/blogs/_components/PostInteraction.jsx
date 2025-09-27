"use client"
import { bookmarkPostApi, getPosts, likePostApi } from "@/services/postServices"
import ButtonIcon from "@/ui/ButtonIcon"
import { toPersianDigits } from "@/utils/numberFormatter"
import { BookmarkIcon, ChatBubbleOvalLeftEllipsisIcon, HeartIcon } from "@heroicons/react/24/outline"
import { BookmarkIcon as BookmarkIconSolid, HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"

const PostInteraction = ({post})=>{
    const router = useRouter()
    const likeHandler = async(postId)=>{
        try {
                const response = await likePostApi(postId);
                router.refresh();
                toast.success(response.message)
        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
    }
    const bookmarkedHandler = async(postId)=>{
        try {
                const response = await bookmarkPostApi(postId);
                router.refresh();
                toast.success(response.message)
        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
    }
    return(
        <div className="flex items-center gap-x-4">
            <ButtonIcon variant={"secondary"}>
                <ChatBubbleOvalLeftEllipsisIcon/>
                <span>{toPersianDigits(post.commentsCount)}</span>
            </ButtonIcon>
            <ButtonIcon onClick={()=>likeHandler(post._id)} variant={"red"}>
              {post.isLiked ? <HeartIconSolid/>:<HeartIcon/>}
            </ButtonIcon>
            <ButtonIcon onClick={()=>bookmarkedHandler(post._id)} variant={"primary"}>
              {post.isBookmarked ? <BookmarkIconSolid/>:<BookmarkIcon/>}
            </ButtonIcon>
        </div>
    )
}
export default PostInteraction