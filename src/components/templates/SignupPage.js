"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
// toast for show alert
import toast from "react-hot-toast";
// function for validate input value
import { formRegisterValidation } from "@/utils/validation/auth";
// constants value for from item
import { authFormAmount } from "@/constants/auth";
import InputForm from "@/molecules/form/InputForm";
import Loader from "@/atoms/Loader";
import Button from "@/atoms/Button";
import { Logo } from "@/utils/svg/index";
import { signupAction } from "src/action/authAction";
import useLoading from "src/hooks/useLoading";

function SignupPage() {
  const [warning, setWarning] = useState({});
  const [touched, setTouched] = useState({});
  const [isLoading, startLoading, stopLoading] = useLoading();
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false,
  });

  useEffect(() => {
    setWarning(formRegisterValidation(form, "signup"));
  }, [form]);

  const changeHandler = (e) => {
    const { name, checked } = e.target;
    setForm((form) => ({ ...form, [name]: checked }));
  };

  const actionHandler = async (formData) => {
    if (Object.keys(warning).length) {
      toast.error("لطفا مقادیر مورد نیاز را وارد نمایید");
      return setTouched({
        email: true,
        password: true,
        confirmPassword: true,
        isAccepted: true,
      });
    }

    try {
      startLoading();
      const res = await signupAction(formData);
      console.log(res);
      stopLoading();
      if (res.error) {
        return toast.error(res.error);
      } else {
        toast.success(res.message);
        setTouched({
          email: false,
          password: false,
          confirmPassword: false,
          isAccepted: false,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <form
        action={(formData) => actionHandler(formData)}
        className="relative w-96 h-fit p-6 space-y-1 md:shadow-medium rounded-lg"
      >
        <Logo className="hidden md:block absolute -translate-y-1/2 top-0 left-0 right-0 mx-auto size-16 text-orange-300" />
        <h1 className="text-center py-6 md:py-4 text-orange-300 drop-shadow-md text-3xl font-bold">
          ثبت نام
        </h1>
        {authFormAmount.map((i, index) => (
          <InputForm
            key={index}
            type={i.type}
            name={i.name}
            value={form[i.name]}
            placeholder={i.placeholder}
            form={form}
            touched={touched}
            setForm={setForm}
            setTouched={setTouched}
            error={warning[i.name]}
          />
        ))}

        <div className="flex items-center gap-2 pb-5">
          <input
            type="checkbox"
            name="isAccepted"
            checked={form.isAccepted}
            onChange={changeHandler}
          />
          <p
            className={`${
              warning.isAccepted && touched.isAccepted
                ? "after:content-['*']"
                : ""
            } after:text-red-500 after:text-xl text-sm text-zinc-700 dark:text-zinc-200`}
          >
            من
            <Link
              className="text-blue-400 px-1 hover:underline transition-all"
              href="/"
            >
              قوانین
            </Link>
            کافی گلد را میپذیرم
          </p>
        </div>
        {isLoading ? (
          <Loader color="#FDBA74" size={10} />
        ) : (
          <Button
            width="w-full"
            bgColor="bg-orange-300"
            color="text-white"
            type="submit"
          >
            ثبت نام
          </Button>
        )}
        <div className="flex items-center justify-center gap-1 text-sm pt-3">
          <span className="text-zinc-500 dark:text-zinc-200">
            آیا شما قبلا حساب ایجاد کرده اید؟
          </span>
          <Link
            className="text-blue-400 hover:underline transition-all"
            href="/signin"
          >
            ورود
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignupPage;
