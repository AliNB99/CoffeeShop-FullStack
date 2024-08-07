import User from "@/models/User";
import Comment from "@/models/Comment";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import connectDB from "@/DB/connectDB";

export async function GET(req) {
  try {
    await connectDB();

    const {
      user: { email },
    } = await getServerSession(authOptions);

    const user = await User.findOne({ email });

    if (user.role !== "OWNER" && user.role !== "ADMIN") {
      return NextResponse.json({
        status: 422,
        message: "دسترسی به این بخش برای شما امکان پذیر نیست.",
      });
    }
    const url = new URL(req.url);
    const searchTerm = url.searchParams.get("search");
    const page = parseInt(url.searchParams.get("page")) || 1;
    const rowsPerPage = parseInt(url.searchParams.get("rowsPerPage")) || 5;

    const totalCountComments = await Comment.countDocuments();

    let comments;

    if (!searchTerm) {
      const skipRows = (page - 1) * rowsPerPage;
      comments = await Comment.find({}).skip(skipRows).limit(rowsPerPage);
    } else {
      const words = searchTerm.split(" ").filter(Boolean);

      const regex = new RegExp(
        words.map((word) => `(?=.*${word})`).join(""),
        "i"
      );

      comments = await Comment.find({
        $or: [{ title: regex }],
      });
    }

    return NextResponse.json({ comments, totalCountComments });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 500, error: "مشکلی پیش آمده است" });
  }
}

export async function DELETE(req) {
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

    const { ids, selectedKeys } = await req.json();

    selectedKeys === "all"
      ? await Comment.deleteMany({})
      : await Comment.deleteMany({
          _id: { $in: ids },
        });

    return NextResponse.json({
      status: 200,
      message: "محصول با موفقیت حذف شد",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 500, error: "مشکلی پیش آمده است" });
  }
}

export async function PATCH(req) {
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

    const { ids, selectedKeys, statusValue } = await req.json();

    console.log({ ids, selectedKeys, statusValue });

    if (!ids || !selectedKeys)
      return NextResponse.json({
        status: 422,
        error: "مقادیر مورد نیاز وجود ندارد!!",
      });

    selectedKeys === "all"
      ? await Comment.updateMany(
          {},
          {
            $set: {
              status: statusValue,
            },
          }
        )
      : await Comment.updateMany(
          { _id: { $in: ids } },
          {
            $set: {
              status: statusValue,
            },
          }
        );

    return NextResponse.json({
      status: 200,
      message: "تغییر وضعیت کاربر با موفقیت انجام شده",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 500, error: "مشکلی پیش آمده است" });
  }
}
