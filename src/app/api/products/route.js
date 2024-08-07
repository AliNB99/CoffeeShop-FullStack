import connectDB from "@/DB/connectDB";
import Product from "@/models/Product";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await connectDB();
    const products = await Product.find({});
    return NextResponse.json({
      status: 200,
      message: "محصولات با موفقیت دریافت شد",
      data: products,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      status: 500,
      error: "مشکلی پیش آمده",
    });
  }
}
