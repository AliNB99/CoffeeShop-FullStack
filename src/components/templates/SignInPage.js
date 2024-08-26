"use client";

import QuestionAuthForm from "@/molecules/form/QuestionAuthForm";
import { formRegisterValidation } from "@/utils/validation/auth";
import { authFormSignIn, loginInfo } from "@/constants/authItem";
import { useSubmitSignIn } from "src/hooks/useQuery/mutations";
import InputForm from "@/molecules/form/InputForm";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Button from "@/atoms/Button";
import Loader from "@/atoms/Loader";
import { Logo } from "@/utils/svg";

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
    <div className="h-screen w-full flex flex-col gap-5 items-center justify-start md:justify-center">
      <form
        onSubmit={submitHandler}
        className="relative w-full sm:w-96 h-fit p-5 space-y-1 md:shadow-medium rounded-lg"
      >
        <Logo className="hidden md:block absolute -translate-y-1/2 top-0 left-0 right-0 mx-auto size-16 text-orange-300" />
        <h1 className="text-center py-6 md:py-4 text-orange-300 drop-shadow-md text-3xl font-bold">
          ورود
        </h1>
        {authFormSignIn.map((i, index) => (
          <InputForm
            key={index}
            type={i.type}
            name={i.name}
            value={form.email}
            placeholder={i.placeholder}
            form={form}
            touched={touched}
            setForm={setForm}
            setTouched={setTouched}
            error={warning[i.name]}
          />
        ))}
        {isPending ? (
          <Loader color="bg-orange-300" size={2} />
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
        <QuestionAuthForm
          title="آیا شما ثبت نام نکرده اید؟"
          link="/signup"
          labelLink="ثبت نام"
        />
        <div className="space-y-5 p-5 md:p-3 md:border-t-2 md:pt-5 shadow-medium md:shadow-none rounded-lg md:rounded-none font-bold text-xs text-zinc-500 dark:text-white">
          {loginInfo.map((i, index) => (
            <div key={index} className="flex items-center justify-between">
              <h4 className="text-orange-300">{i.title}</h4>
              <span>{i.value}</span>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
}

export default SignInPage;
