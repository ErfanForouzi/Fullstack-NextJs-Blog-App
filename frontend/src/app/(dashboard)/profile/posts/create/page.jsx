import Breadcrumbs from "@/ui/BreadCrumbs"
import CreatePostForm from "./_/CreatePostForm"

const CreatePost = ()=>{
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
                    href:"/profile/posts/create",
                    label:"ایجاد پست",
                    active:true
                },
            ]}
            />
            <CreatePostForm/>
        </div>
    )
}
export default CreatePost