"use client";

import QuestionAuthForm from "@/molecules/form/QuestionAuthForm";
import { formRegisterValidation } from "@/utils/validation/auth";
import { useSubmitSignup } from "src/hooks/useQuery/mutations";
import InputForm from "@/molecules/form/InputForm";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/utils/svg/index";
import Button from "@/atoms/Button";
import Loader from "@/atoms/Loader";
import toast from "react-hot-toast";
import Link from "next/link";
import {
  authFormSignUp,
  formSignUpItem,
  touchedSignUpItem,
} from "@/constants/authItem";

function SignupPage() {
  const [form, setForm] = useState(formSignUpItem);
  const [warning, setWarning] = useState({});
  const [touched, setTouched] = useState({});
  const { push } = useRouter();
  const { isPending, mutateAsync } = useSubmitSignup();

  useEffect(() => {
    setWarning(formRegisterValidation(form, "signup"));
  }, [form]);

  const changeHandler = (e) => {
    const { name, checked } = e.target;
    setForm((form) => ({ ...form, [name]: checked }));
  };
  const actionHandler = async (e) => {
    e.preventDefault();
    if (Object.keys(warning).length) {
      toast.error("لطفا مقادیر مورد نیاز را وارد نمایید");
      return setTouched({
        firstName: true,
        lastName: true,
        email: true,
        password: true,
        confirmPassword: true,
        isAccepted: true,
      });
    }
    await mutateAsync(form);
    setTouched(touchedSignUpItem);
    push("/signin");
  };

  return (
    <div className="h-screen w-full flex items-start md:items-center justify-center">
      <form
        onSubmit={actionHandler}
        className="relative w-full sm:w-96 h-fit p-5 lg:mt-5 space-y-1 md:shadow-medium rounded-lg"
      >
        <Logo className="hidden md:block absolute -translate-y-1/2 top-0 left-0 right-0 mx-auto size-16 text-orange-300" />
        <h1 className="text-center py-6 md:py-2 text-orange-300 drop-shadow-md text-3xl font-bold">
          ثبت نام
        </h1>
        {authFormSignUp.map((i, index) => (
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

        <div className="flex items-center gap-2 pb-2">
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
        {isPending ? (
          <Loader color="bg-orange-300" size={2} />
        ) : (
          <Button
            isLoading={isPending}
            width="w-full"
            bgColor="bg-orange-300"
            color="text-white"
            type="submit"
          >
            ثبت نام
          </Button>
        )}
        <QuestionAuthForm
          title="آیا شما قبلا حساب ایجاد کرده اید؟"
          link="/signin"
          labelLink="ثبت نام"
        />
      </form>
    </div>
  );
}

export default SignupPage;
