import { getCategoryByIdApi } from "@/services/categoryService";
import Breadcrumbs from "@/ui/Breadcrumbs";
import { notFound } from "next/navigation";
import EditCategoryForm from "./_/EditCategoryForm";

const EditPost = async({params})=>{
const {categoryId} = await params;
const {category}  = await getCategoryByIdApi(categoryId);
if(!category){
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
                    href:"/profile/categories",
                    label:"دسته بندی ها"
                },
                {
                    href:`/profile/categories/${categoryId}/edit`,
                    label:"ویرایش دسته بندی",
                    active:true
                },
            ]}
            />
            <EditCategoryForm category={category}/>
        </div>
        
    )
}
export default EditPost