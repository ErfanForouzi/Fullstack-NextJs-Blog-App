"use server"

import { createCommentApi } from "@/services/commentService";
import setCookiesOnReq from "@/utils/setCookiesOnReq";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

// export async function createComment(postId,parentId,formData){
export async function createComment(prevState,{formData,postId,parentId}){
    const cookiesStore = cookies();
    const options = setCookiesOnReq(cookiesStore)
    const newRawData = {
        postId,
        parentId,
        text:formData.get("text")
    }

   try {
    const {message} =  await createCommentApi(newRawData,options)
    revalidatePath("/blogs/[slug]")
    return {
        message
    }
   } catch (err) {
    const error = err?.response?.data?.message;
    return {
        error
    }
   }
}