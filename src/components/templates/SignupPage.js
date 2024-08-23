"use client";

import Link from "next/link";
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
import { useRouter } from "next/navigation";
import { useSubmitSignup } from "src/hooks/useQuery/mutations";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Tooltip } from "@nextui-org/react";

function SignupPage() {
  const [warning, setWarning] = useState({});
  const [touched, setTouched] = useState({});

  const { push } = useRouter();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false,
  });

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
    try {
      const { data } = await mutateAsync(form);
      setTouched({
        firstName: false,
        lastName: false,
        email: false,
        password: false,
        confirmPassword: false,
        isAccepted: false,
      });
      push("/signin");
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.error);
    }
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
        <div className="flex items-center justify-between px-1 pt-4">
          <div className="flex items-center justify-center gap-1 text-sm">
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
          <Tooltip content="صفحه اصلی">
            <Link className="text-orange-400" href="/">
              <ArrowLeftIcon />
            </Link>
          </Tooltip>
        </div>
      </form>
    </div>
  );
}

export default SignupPage;
