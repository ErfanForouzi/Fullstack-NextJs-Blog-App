import { cookies } from "next/headers";
import { getAllUsersApi } from "./authService";
import setCookiesOnReq from "@/utils/setCookiesOnReq";
import { getAllCommentsApi } from "./commentService";
import { getPosts } from "./postServices";

export async function fetchCardData() {
    const cookieStore = cookies();
    const options = setCookiesOnReq(cookieStore)
    try {
        const data = await  Promise.all([
             getAllUsersApi(options),
             getAllCommentsApi(options),
             getPosts(options),
        ])
     
        const numberOfUsers = Number(data[0].users.length ?? "0");
        const numberOfPosts = Number(data[2].posts.length ?? "0");
        const numberOfComments = Number(data[1].commentsCount ?? "0");

        return{
            numberOfUsers,
            numberOfPosts,
            numberOfComments
        }

    } catch (error) {
      console.log(error);  
    }
}