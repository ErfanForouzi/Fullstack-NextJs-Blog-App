"use server";
import { deletePostApi } from "@/services/postServices";
import setCookiesOnReq from "@/utils/setCookiesOnReq";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function deletePost(prevState, { formData, postId }) {
  const cookieStore = cookies();
  const options = setCookiesOnReq(cookieStore);

  try {
    const {message} =  await deletePostApi({id:postId,options})
        revalidatePath("/profile/posts")
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
