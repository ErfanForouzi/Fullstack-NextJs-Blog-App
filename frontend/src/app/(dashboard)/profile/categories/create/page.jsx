import Breadcrumbs from "@/ui/BreadCrumbs"
import CreateCategoryForm from "./_/CreateCategoryForm"

const CreateCategory = ()=>{
    return(
        <div>
            <Breadcrumbs 
            breadcrumbs={[
                {
                    href:"/profile",
                    label:"پروفایل"
                },
                {
                    href:"/profile/categories",
                    label:"دسته بندی ها"
                },
                {
                    href:"/profile/categories/create",
                    label:"ایجاد دسته بندی",
                    active:true
                },
            ]}
            />
            <CreateCategoryForm/>
        </div>
    )
}
export default CreateCategory