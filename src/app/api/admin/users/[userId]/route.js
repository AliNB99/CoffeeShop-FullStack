import connectDB from "@/DB/connectDB";
import User from "@/models/User";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function DELETE(req, context) {
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
    if (user.role === "USER") {
      return NextResponse.json({
        status: 403,
        error: "دسترسی شما برای این کار محدود شده است",
      });
    }
    const {
      params: { userId },
    } = context;

    await User.findOneAndDelete({ _id: userId });
    return NextResponse.json({
      status: 200,
      message: "کاربر با موفقیت حذف شد",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 500, error: "مشکلی پیش آمده است" });
  }
}

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
    if (user.role === "USER") {
      return NextResponse.json({
        status: 403,
        error: "دسترسی شما برای این کار محدود شده است",
      });
    }
    const {
      params: { userId },
    } = context;

    const data = await req.json();
    const targetUser = await User.findOne({ _id: userId });

    switch (data.action) {
      case "changeStatus":
        targetUser.isAvailable = !targetUser.isAvailable;
        targetUser.save();
        return NextResponse.json({
          targetUser,
          status: 200,
          message: "تغییر وضعیت کاربر با موفقیت انجام شده",
        });

      case "changeAvatar":
        targetUser.avatar = data.img;
        targetUser.save();
        return NextResponse.json({
          url: data.img,
          status: 200,
          message: "تغییر عکس پروفایل با موفقیت انجام شده",
        });

      case "changeRole":
        targetUser.role = targetUser.role === "USER" ? "ADMIN" : "USER";
        targetUser.save();
        return NextResponse.json({
          url: data.img,
          status: 200,
          message: "تغییر نقش کاربر با موفقیت انجام شده",
        });
      default:
        break;
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 500, error: "مشکلی پیش آمده است" });
  }
}
