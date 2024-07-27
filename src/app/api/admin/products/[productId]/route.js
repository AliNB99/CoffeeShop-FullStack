import connectDB from "@/DB/connectDB";
import Product from "@/models/Product";
import User from "@/models/User";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

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

    if (user.role !== "OWNER" || user.role !== "ADMIN") {
      return NextResponse.json({
        status: 403,
        error: "دسترسی شما برای این کار محدود شده است",
      });
    }
    const {
      params: { productId },
    } = context;

    const product = await Product.findOne({ _id: productId });

    product.isAvailable = !product.isAvailable;
    product.save();

    return NextResponse.json({
      status: 200,
      message: "تغییرات با موفقیت انجام شد",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 500, error: "مشکلی پیش آمده است" });
  }
}
