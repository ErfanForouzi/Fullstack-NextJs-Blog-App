"use client";
import { useAuth } from "@/context/AuthContext";
import Button from "@/ui/Button";
import RHFTextField from "@/ui/RHFTextField";
import SpinnerMini from "@/ui/SpinnerMini";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup
  .object({
    name: yup
      .string()
      .min(5, "نام و نام خانوادگی باید حداقل ۵ کاراکتر باشد")
      .max(30, "نام و نام خانوادگی باید حداکثر ۳۰ کاراکتر باشد")
      .required("نام و نام خانوادگی الزامی میباشد"),
    email: yup
      .string()
      .email("ایمیل معتبر نمیباشد")
      .required("ایمیل الزامی میباشد"),
    password: yup
      .string()
      .min(5, "رمز عبور باید حداقل ۵ کاراکتر باشد")
      .required("رمز عبور الزامی میباشد"),
  })
  .required();

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading, isValid, isDirty },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });


  const { signup } = useAuth();

  const onSubmit = async (values) => {
    await signup(values);
  };

  return (
    <div>
      <h1 className="text-xl font-bold text-secondary-500 text-center mb-6">
        ثبت نام
      </h1>
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <RHFTextField
          name={"name"}
          label={"نام و نام خانوادگی"}
          register={register}
          isRequired
          errors={errors}
        />
        <RHFTextField
          name={"email"}
          label={"ایمیل"}
          register={register}
          dir="ltr"
          isRequired
          errors={errors}
        />
        <RHFTextField
          name={"password"}
          label={"رمز عبور"}
          register={register}
          type="password"
          dir="ltr"
          isRequired
          errors={errors}
        />
        {isLoading ? (
          <SpinnerMini />
        ) : (
          <Button
            disabled={!isDirty || !isValid}
            type="submit"
            variant="primary"
            className={`w-full text-white`}
          >
            تایید
          </Button>
        )}
      </form>
      <div className="flex items-center mt-5 gap-x-2">
        <span className="text-secondary-500">قبلا ثبت نام کردید؟</span>
        <Link className="text-primary-900" href={"/signin"}>
          ورود
        </Link>
      </div>
    </div>
  );
};

export default Signup;
