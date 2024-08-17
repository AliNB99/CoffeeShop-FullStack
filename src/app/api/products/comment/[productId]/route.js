import connectDB from "@/DB/connectDB";
import Comment from "@/models/Comment";
import { NextResponse } from "next/server";

export async function GET(req, context) {
  try {
    await connectDB();

    const {
      params: { productId },
    } = context;

    const comments = await Comment.find({ productId, status: "accepted" });

    if (comments) {
      return NextResponse.json({
        status: 200,
        message: "نظرات با موفقیت دریافت شد",
        comments,
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 500, message: "مشکلی پیش آمده" });
  }
}

export async function POST(req, context) {
  try {
    await connectDB();

    const {
      params: { productId },
    } = context;
    const { data } = await req.json();

    const {
      user: { firstName, lastName, email, avatar, status, _id: userId },
      comment: { description, rate },
      product: { title, category, images },
    } = data;

    if (!userId) {
      return NextResponse.json({
        status: 422,
        error: "لطفا ابتدا وارد حساب کاربری شوید",
      });
    }

    if (status !== "authorized") {
      return NextResponse.json({
        status: 403,
        error: "دسترسی شما به سایت مسدود شده است",
      });
    }

    const comment = await Comment.create({
      description,
      rate,
      userInfo: { firstName, lastName, email, avatar },
      productInfo: { title, category, images },
      productId,
    });

    if (comment) {
      return NextResponse.json({
        status: 201,
        message: "دیدگاه شما ثبت شد و منتظر تایید می باشد.",
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 500, error: "مشکلی پیش آمده است" });
  }
}
