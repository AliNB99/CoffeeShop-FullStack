import { hashingPassword } from "@/utils/helper/helper";
import { NextResponse } from "next/server";
import connectDB from "@/DB/connectDB";
import User from "@/models/User";

export async function POST(req) {
  try {
    await connectDB();

    const { email, password, firstName, lastName } = await req.json();
    if (!email || !password || !firstName || !lastName) {
      return NextResponse.json(
        { error: "لطفا اطلاعات معتبر وارد کنید" },
        { status: 422 }
      );
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "این حساب کاربری وجود دارد" },
        { status: 422 }
      );
    }

    const hashedPassword = await hashingPassword(password);

    await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    return NextResponse.json(
      { message: "حساب کاربری ایجاد شد" },
      { status: 201 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است" },
      {
        status: 500,
      }
    );
  }
}
