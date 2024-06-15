"use client";

import { signIn } from "next-auth/react";
import { formRegisterValidation } from "@/utils/validation/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/utils/svg";
import toast from "react-hot-toast";
import Button from "@/atoms/Button";
import InputForm from "@/molecules/form/InputForm";
import Loader from "@/atoms/Loader";

function SignInPage() {
  const [warning, setWarning] = useState({});
  const [touched, setTouched] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  useEffect(() => {
    setWarning(formRegisterValidation(form));
  }, [form]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (Object.keys(warning).length) {
      toast.error("لطفا مقادیر مورد نیاز را وارد نمایید");
      return setTouched({
        email: true,
        password: true,
        confirmPassword: true,
        isAccepted: true,
      });
    }

    setIsLoading(true);
    const res = await signIn("credentials", {
      email: form.email,
      password: form.password,
      redirect: false,
    });

    setIsLoading(false);
    if (res.error) {
      return toast.error(res.error);
    } else {
      toast.success("ورود به حساب کاربری با موفقیت انجام شد");
      setForm({
        email: "",
        password: "",
      });
      setTouched({
        email: false,
        password: false,
      });
      router.push("/");
      router.refresh();
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <form
        onSubmit={submitHandler}
        className="relative w-96 h-fit p-6 space-y-6 md:shadow-medium rounded-lg"
      >
        <Logo className="hidden md:block absolute -translate-y-1/2 top-0 left-0 right-0 mx-auto size-16 text-orange-300" />
        <h1 className="text-center py-6 md:py-3 text-orange-300 drop-shadow-md text-3xl font-bold">
          ورود
        </h1>
        <InputForm
          type="text"
          name="email"
          value={form.email}
          placeholder="ایمیل خود را وارد نمایید"
          form={form}
          touched={touched}
          setForm={setForm}
          setTouched={setTouched}
          error={warning.email}
        />
        <InputForm
          type="password"
          name="password"
          value={form.password}
          placeholder="رمز عبور خود را وارد نمایید"
          form={form}
          touched={touched}
          setForm={setForm}
          setTouched={setTouched}
          error={warning.password}
        />

        {isLoading ? (
          <Loader color="#FDBA74" size={10} />
        ) : (
          <Button bgColor="bg-orange-300" color="text-white">
            ورود
          </Button>
        )}
        <div className="flex items-center justify-center gap-1 text-sm pt-3">
          <span className="text-zinc-500 dark:text-zinc-200">
            آیا شما ثبت نام نکرده اید؟
          </span>
          <Link
            className="text-blue-400 hover:underline transition-all"
            href="/signup"
          >
            ثبت نام
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignInPage;
