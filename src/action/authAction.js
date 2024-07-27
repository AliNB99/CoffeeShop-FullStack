"use server";

import connectDB from "@/DB/connectDB";
import User from "@/models/User";
import { hashingPassword } from "@/utils/validation/auth";

export const signupAction = async (formData) => {
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    await connectDB();

    if (!email || !password || !firstName || !lastName) {
      return {
        error: "لطفا اطلاعات مورد نیاز را کامل وارد نمایید",
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

    await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });
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
