import User from "@/models/User";
import connectDB from "@/DB/connectDB";
import { NextResponse } from "next/server";
import { hashingPassword } from "@/utils/validation/auth";

export async function POST(req) {
  try {
    await connectDB();
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({
        error: "لطفا ایمیل و پسورد خود را وارد نمایید",
        status: 422,
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return NextResponse.json({
        error: "شما قبلا حساب ایجاد کرده اید",
        status: 422,
      });
    }

    const hashedPassword = await hashingPassword(password);

    const newUser = await User.create({
      email,
      password: hashedPassword,
    });
    console.log(newUser);

    return NextResponse.json({
      message: "حساب کاربری با موفقیت ایجاد شد",
      status: 201,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      error: "مشکلی در سرور رخ داده است",
      status: 500,
    });
  }
}
