"use client";
import ButtonIcon from "@/ui/ButtonIcon";
import ConfirmDelete from "@/ui/ConfirmDelete";
import Modal from "@/ui/Modal";
import { PencilIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useActionState, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { deleteCategory } from "../../actions";

export function UpdateCategory({ id }) {
  return (
    <Link href={`/profile/categories/${id}/edit`}>
      <ButtonIcon variant={"outline"}>
        <PencilIcon />
      </ButtonIcon>
    </Link>
  );
}

export function DeleteCategory({ category: { _id: categoryId, title } }) {
  const [open, setOpen] = useState(false);
  const [state, formAction] = useActionState(deleteCategory, {
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
          onConfirm={async (formData) => await formAction({ formData, categoryId })}
          onClose={() => setOpen(false)}
        />
      </Modal>
    </>
  );
}
export function CreateCategory() {
  return (
    <Link
      href="/profile/categories/create"
      className="col-span-2 flex justify-self-end gap-x-4 py-3 items-center rounded-lg bg-primary-900 px-4 text-sm font-medium text-secondary-0 
        transition-colors hover:bg-primary-700"
    >
      <span className="hidden md:block">ایجاد دسته بندی</span>{" "}
      <PlusIcon className="w-5" />
    </Link>
  );
}
