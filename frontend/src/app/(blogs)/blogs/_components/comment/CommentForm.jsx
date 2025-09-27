"use client";
import { createComment } from "@/lib/actions";
import SubmitButton from "@/ui/SubmitButton";
import TextArea from "@/ui/TextArea";
import { useEffect, useState ,useActionState} from "react";
import toast from "react-hot-toast";

const initialState = {
  error: "",
  message: "",
};

const CommentForm = ({ postId, parentId,onClose }) => {
  const [text, setText] = useState("");
  const [state, formAction] = useActionState(createComment, initialState);
  // const createCommentWithPostIdAndParentId = createComment.bind(null,postId,parentId)


  useEffect(()=>{
    if(state?.message){
        toast.success(state.message)
        onClose()
    }
    if(state?.error){

        toast.success(state.error)
        onClose()
    }
  },[state])

  return (
    <div>
      <div className="flex items-center mt-4">
        <div className="w-full max-w-md justify-center mx-auto">
          <form
            action={async (formData) =>
              await formAction({ formData, postId, parentId })
            }
            className="space-y-7"
          >
            <TextArea
              name="text"
              label="متن نظر"
              value={text}
              onChange={(e) => setText(e.target.value)}
              isRequired
            />
            <SubmitButton>تایید</SubmitButton>
          </form>
        </div>
      </div>
    </div>
  );
};
export default CommentForm;
