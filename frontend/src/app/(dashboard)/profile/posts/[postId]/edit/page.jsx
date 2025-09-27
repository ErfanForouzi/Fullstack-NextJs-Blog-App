import { getPostByIdApi } from "@/services/postServices";
import Breadcrumbs from "@/ui/Breadcrumbs";
import { notFound } from "next/navigation";
import CreatePostForm from "../../create/_/CreatePostForm";
import EditPostForm from "./_/EditPostForm";

const EditPost = async({params})=>{
const {postId} = await params;
const {post}  = await getPostByIdApi(postId);
if(!post._id){
    return notFound()
}
    return(
        <div>
            <Breadcrumbs 
            breadcrumbs={[
                {
                    href:"/profile",
                    label:"پروفایل"
                },
                {
                    href:"/profile/posts",
                    label:"پست ها"
                },
                {
                    href:`/profile/posts/${postId}/edit`,
                    label:"ویرایش پست",
                    active:true
                },
            ]}
            />
            <EditPostForm post={post}/>
        </div>
        
    )
}
export default EditPost