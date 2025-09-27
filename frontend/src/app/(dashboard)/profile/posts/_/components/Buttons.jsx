"use client";
import ButtonIcon from "@/ui/ButtonIcon";
import ConfirmDelete from "@/ui/ConfirmDelete";
import Modal from "@/ui/Modal";
import { PencilIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useActionState, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { deletePost } from "../../actions";

export function UpdatePost({ id }) {
  return (
    <Link href={`/profile/posts/${id}/edit`}>
      <ButtonIcon variant={"outline"}>
        <PencilIcon />
      </ButtonIcon>
    </Link>
  );
}
// export function DeletePost({ post: { _id, title } }) {
//   const [open, setOpen] = useState(false);

//   const {isDeleting,deletePost} = useDeletePost()
//   const router = useRouter()

//   return (
//     <>
//       <ButtonIcon variant={"outline"} onClick={() => setOpen(true)}>
//         <TrashIcon className="text-error" />
//       </ButtonIcon>
//       <Modal onClose={() => setOpen(false)} open={open} title={`حذف ${title}`}>
//         <ConfirmDelete
//           resourceName={title}
//           disabled={isDeleting}
//           onConfirm={async(event) => {
//             event.preventDefault();
//             deletePost({id:_id},{
//               onSuccess:()=>{
//                 setOpen(false);
//                 router.push("/profile/posts")
//               }
//               })
//           }}
//           onClose={() => setOpen(false)}
//         />
//       </Modal>
//     </>
//   );
// }
export function DeletePost({ post: { _id: postId, title } }) {
  const [open, setOpen] = useState(false);
  const [state, formAction] = useActionState(deletePost, {
    message: "",
    error: "",
  });

  useEffect(() => {
    if (state?.message) {
      toast.success(state?.message);
      setOpen(false);
    }
    if (state?.error) {
      toast.error(state?.error);
      setOpen(false);
    }
  }, [state]);

  return (
    <>
      <ButtonIcon variant={"outline"} onClick={() => setOpen(true)}>
        <TrashIcon className="text-error" />
      </ButtonIcon>
      <Modal onClose={() => setOpen(false)} open={open} title={`حذف ${title}`}>
        <ConfirmDelete
          resourceName={title}
          onConfirm={async (formData) => await formAction({ formData, postId })}
          onClose={() => setOpen(false)}
        />
      </Modal>
    </>
  );
}
export function CreatePost() {
  return (
    <Link
      href="/profile/posts/create"
      className="justify-self-end flex gap-x-4 py-3 items-center rounded-lg bg-primary-900 px-4 text-sm font-medium text-secondary-0 
        transition-colors hover:bg-primary-700"
    >
      <span className="hidden md:block">ایجاد پست</span>{" "}
      <PlusIcon className="w-5" />
    </Link>
  );
}
