"use client";
import Button from "@/ui/Button";
import RHFTextField from "@/ui/RHFTextField";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import useEditCategory from "@/hooks/useEditCategory"
import * as yup from "yup";
import SpinnerMini from "@/ui/SpinnerMini";
const schema = yup
  .object({
    title: yup
      .string()
      .min(5, "حداقل ۵ کاراکتر را وارد کنید")
      .required("عنوان ضروری است"),
    englishTitle: yup
      .string()
      .min(5, "حداقل ۵ کاراکتر را وارد کنید")
      .required("عنوان انگلیسی ضروری است"),
      description: yup
      .string()
      .min(5, "حداقل ۱۰ کاراکتر را وارد کنید")
      .required("توضیحات ضروری است"),
  })
  .required();

const EditCategoryForm = ({category}) => {
  const router = useRouter();
  const {editCategory,isEditing} = useEditCategory()
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(schema),
  defaultValues:category
  });

  const onSubmit = (data) => {
    const editData = {
      title:data.title,
      description:data.description,
      englishTitle:data.englishTitle,
    }


    editCategory(
      { id: category._id, data:editData },
      {
        onSuccess: () => router.push("/profile/categories"),
      }
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <RHFTextField
        name={"title"}
        errors={errors}
        label={"عنوان"}
        isRequired
        register={register}
      />
      <RHFTextField
        name={"englishTitle"}
        errors={errors}
        label={"عنوان انگلیسی"}
        isRequired
        register={register}
      />
      <RHFTextField
        name={"description"}
        errors={errors}
        label={"توضیحات"}
        isRequired
        register={register}
      />
      <div>
        {isEditing ? <SpinnerMini/>:  <Button variant="primary" type="submit">
          تایید
        </Button>}
      </div>
    </form>
  );
};

export default EditCategoryForm;
