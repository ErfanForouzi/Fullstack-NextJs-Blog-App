"use server";
import { deleteCategoryApi } from "@/services/categoryService";
import setCookiesOnReq from "@/utils/setCookiesOnReq";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function deleteCategory(prevState, { formData, categoryId }) {
  const cookieStore = cookies();
  const options = setCookiesOnReq(cookieStore);

  try {
    const {message} =  await deleteCategoryApi({id:categoryId,options})
        revalidatePath("/profile/categories")
        return {
            message
        }
  } catch (err) {
    const error = err?.response?.data?.message;
    return {
      error,
    };
  }
}
