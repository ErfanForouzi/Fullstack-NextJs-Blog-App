"use client";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import useCategories from "@/hooks/useCategories";
import useCreatePost from "@/hooks/useCreatePost";
import Button from "@/ui/Button";
import Image from "next/image";
import ButtonIcon from "@/ui/ButtonIcon";
import FileUpload from "@/ui/FileUpload";
import RHFSelect from "@/ui/RHFSelect";
import RHFTextField from "@/ui/RHFTextField";
import SpinnerMini from "@/ui/SpinnerMini";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import * as yup from "yup";

const schema = yup
  .object({
    title: yup
      .string()
      .min(5, "حداقل ۵ کاراکتر را وارد کنید")
      .required("عنوان ضروری است"),
    briefText: yup
      .string()
      .min(5, "حداقل ۱۰ کاراکتر را وارد کنید")
      .required("توضیحات ضروری است"),
    text: yup
      .string()
      .min(5, "حداقل ۱۰ کاراکتر را وارد کنید")
      .required("توضیحات ضروری است"),
    slug: yup.string().required("اسلاگ ضروری است"),
    readingTime: yup
      .number()
      .positive("عدد وارد شده باید بزرگتر از 0 باشد")
      .integer()
      .required("زمان مطالعه ضروری است")
      .typeError("یک عدد را وارد کنید"),
    category: yup.string().required("دسته بندی ضروری است"),
  })
  .required();

const CreatePostForm = () => {
  const router =useRouter();

  const [coverImageUrl, setCoverImageUrl] = useState(null);
  const { categories } = useCategories();
  const {createPost,isCreating} = useCreatePost()
  const {
    reset,
    register,
    formState: { errors },
    handleSubmit,
    control,
    setValue,
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {

    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }

    createPost(formData,{
      onSuccess:()=>router.push("/profile/posts")
    })

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
        name={"briefText"}
        errors={errors}
        label={"متن کوتاه"}
        isRequired
        register={register}
      />
      <RHFTextField
        name={"text"}
        errors={errors}
        label={"متن"}
        isRequired
        register={register}
      />
      <RHFTextField
        name={"slug"}
        errors={errors}
        label={"اسلاگ"}
        isRequired
        register={register}
      />
      <RHFTextField
        name={"readingTime"}
        errors={errors}
        label={"زمان مطالعه"}
        isRequired
        register={register}
      />
      <RHFSelect
        name={"category"}
        errors={errors}
        label={"دسته بندی"}
        isRequired
        register={register}
        options={categories}
      />
      <Controller
        name="coverImage"
        control={control}
        rules={{ required: "کاور پست الزامی میباشد" }}
        render={({ field: { onChange, value, ...rest } }) => {
          return (
            <FileUpload
              label={"انتخاب کاور پست"}
              name={"coverImage"}
              value={value?.fileName}
              {...reset}
              isRequired
              errors={errors}
              onChange={(event) => {
                const file = event.target.files[0];
                setCoverImageUrl(URL.createObjectURL(file));
                onChange(file);
                event.target.value = null;
              }}
            />
          );
        }}
      />
      {coverImageUrl && (
        <div className="w-[200px] h-[200px] relative aspect-video overflow-hidden rounded-lg">
          <Image
            width={200}
            height={200}
            alt="cover-iamge"
            src={coverImageUrl}
            className="object-cover object-center"
          />
          <ButtonIcon
            onClick={() => {
              setCoverImageUrl(null);
              setValue("coverImage", null);
            }}
            variant="red"
            className="w-6 h-6 absolute left-4 top-4"
          >
            <XMarkIcon />
          </ButtonIcon>
        </div>
      )}

    <div>
      {isCreating ? <SpinnerMini/>:  <Button variant="primary" type="submit">
        تایید
      </Button>}
    </div>
    </form>
  );
};

export default CreatePostForm;
//__________________________
//Without Editting Involved
//__________________________

