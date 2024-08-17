"use client";

import Link from "next/link";
import toast from "react-hot-toast";
import Button from "@/atoms/Button";
import Loader from "@/atoms/Loader";
import { Logo } from "@/utils/svg";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import InputForm from "@/molecules/form/InputForm";
import { formRegisterValidation } from "@/utils/validation/auth";
import { useSubmitSignIn } from "src/hooks/useQuery/mutations";

function SignInPage() {
  const [warning, setWarning] = useState({});
  const [touched, setTouched] = useState({});
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const { push, refresh } = useRouter();

  const { isPending, mutateAsync } = useSubmitSignIn("signin");

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
      });
    }

    const data = await mutateAsync(form);

    if (data.error) {
      return toast.error(data.error);
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
      push("/");
      refresh();
    }
  };

  return (
    <div className="h-screen w-full flex flex-col gap-5 items-center justify-center">
      <form
        onSubmit={submitHandler}
        className="relative w-full md:w-96 h-fit p-5 space-y-1 md:shadow-medium rounded-lg"
      >
        <Logo className="hidden md:block absolute -translate-y-1/2 top-0 left-0 right-0 mx-auto size-16 text-orange-300" />
        <h1 className="text-center py-6 md:py-4 text-orange-300 drop-shadow-md text-3xl font-bold">
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

        {isPending ? (
          <Loader color="#FDBA74" size={10} />
        ) : (
          <div>
            <Button
              width="w-full"
              bgColor="bg-orange-300"
              color="text-white"
              type="submit"
            >
              ورود
            </Button>
          </div>
        )}
        <div className="flex items-center justify-center gap-1 text-sm pt-4">
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
      <div className="w-[350px] border-2 space-y-5 border-orange-300 rounded-lg text-sm font-bold p-3">
        <div className="flex items-center justify-center gap-2">
          <h4 className="text-red-500">توجه:</h4>
          <span className="text-zinc-600 text-xs dark:text-white">
            ادمین و مالک امکان خرید از سایت برایشان فراهم نشده
          </span>
        </div>
        <div className="flex items-center justify-between">
          <h4 className="text-orange-300">ایمیل پنل مالک</h4>
          <span className="text-zinc-600 dark:text-white">
            alinb99.dev@gmail.com
          </span>
        </div>
        <div className="flex items-center justify-between">
          <h4 className="text-orange-300">ایمیل پنل ادمین</h4>
          <span className="text-zinc-600 dark:text-white">reza@gmail.com</span>
        </div>
        <div className="flex items-center justify-between">
          <h4 className="text-orange-300">رمز عبور</h4>
          <span className="text-zinc-600 dark:text-white">12345678</span>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
