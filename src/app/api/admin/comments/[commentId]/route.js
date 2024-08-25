import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import connectDB from "@/DB/connectDB";
import Comment from "@/models/Comment";
import User from "@/models/User";

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

    if (user.status !== "authorized") {
      return NextResponse.json({
        status: 403,
        error: "دسترسی شما به سایت مسدود شده است",
      });
    }

    if (user.role === "USER") {
      return NextResponse.json({
        status: 403,
        error: "دسترسی شما برای این کار محدود شده است",
      });
    }
    const {
      params: { commentId },
    } = context;

    await Comment.findOneAndDelete({ _id: commentId });
    return NextResponse.json({
      status: 200,
      message: "دیدگاه کاربر با موفقیت حذف شد",
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
      params: { commentId },
    } = context;

    const { action, status } = await req.json();
    const commentTarget = await Comment.findOne({ _id: commentId });

    switch (action) {
      case "changeStatus":
        commentTarget.status = status;
        commentTarget.save();
        return NextResponse.json({
          status: 200,
          message: "وضعیت نمایش دیدگاه با موفقیت تغییر کرد",
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
