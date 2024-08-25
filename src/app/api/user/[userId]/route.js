import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import connectDB from "@/DB/connectDB";
import User from "@/models/User";

export async function PATCH(req, context) {
  try {
    const session = await getServerSession(req);
    if (!session) {
      return NextResponse.json({
        status: 401,
        error: "ابتدا وارد حساب خود شوید",
      });
    }
    await connectDB();

    const user = await User.findOne({ email: session.user.email });

    if (!user) {
      return NextResponse.json({ status: 404, error: "حساب کاربری یافت نشد" });
    }

    if (user.status !== "authorized") {
      return NextResponse.json({
        status: 403,
        error: "دسترسی شما به سایت مسدود شده است",
      });
    }

    const {
      params: { userId },
    } = context;

    const { action, img, form } = await req.json();
    const targetUser = await User.findOne({ _id: userId });

    switch (action) {
      case "changeAvatar":
        targetUser.avatar = img;
        targetUser.save();
        return NextResponse.json({
          url: img,
          status: 200,
          message: "تغییر عکس پروفایل با موفقیت انجام شده",
        });

      case "changeInformation":
        const {
          firstName,
          lastName,
          email,
          phone,
          bankInfo,
          postalCode,
          address,
        } = form;

        if (!firstName || !lastName || !email) {
          return NextResponse.json({
            status: 422,
            error: "مقادیر ایمیل، نام و نام خانوادگی را وارد نمایید.",
          });
        }

        targetUser.firstName = firstName;
        targetUser.lastName = lastName;
        targetUser.email = email;
        targetUser.phone = phone;
        targetUser.bankInfo = bankInfo;
        targetUser.postalCode = postalCode;
        targetUser.address = address;
        targetUser.save();

        return NextResponse.json({
          status: 200,
          message: "تغییر مشخصات کاربر با موفقیت انجام شده",
        });
      default:
        return NextResponse.json({
          status: 422,
          message: "اطلاعات مورد نیاز یافت نشد.",
        });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 500, error: "مشکلی پیش آمده است" });
  }
}
