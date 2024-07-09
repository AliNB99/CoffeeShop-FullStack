"use server";

import connectDB from "@/DB/connectDB";
import User from "@/models/User";
import { hashingPassword } from "@/utils/validation/auth";
import { revalidatePath } from "next/cache";

export const signupAction = async (formData) => {
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    await connectDB();

    if (!email || !password) {
      return {
        error: "لطفا ایمیل و پسورد خود را وارد نمایید",
        status: 422,
      };
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return {
        error: "شما قبلا حساب ایجاد کرده اید",
        status: 422,
      };
    }

    const hashedPassword = await hashingPassword(password);

    const newUser = await User.create({
      email,
      password: hashedPassword,
    });
    revalidatePath("/signin");
    return {
      message: "حساب کاربری با موفقیت ایجاد شد",
      status: 201,
    };
  } catch (err) {
    console.log(err);
    return {
      message: "مشکلی در سمت سرور پیش آمده است.",
      status: 500,
    };
  }
};
