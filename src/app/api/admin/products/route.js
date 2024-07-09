import Product from "@/models/Product";
import User from "@/models/User";
import connectDB from "@/DB/connectDB";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req) {
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

    if (user.role !== "ADMIN") {
      return NextResponse.json({
        status: 403,
        error: "دسترسی شما برای این کار محدود شده است",
      });
    }

    const data = await req.json();
    const {
      title,
      description,
      quantity,
      price,
      images,
      category,
      discount,
      advantages,
      disadvantages,
      specifications,
    } = data.body;

    if (!title || !description || !quantity || !price || !category) {
      return NextResponse.json({
        status: 422,
        error: "لطفا تمام مقادیر لازم را وارد نمایید",
      });
    }

    const newProduct = await Product.create({
      title,
      description,
      quantity,
      price,
      images,
      category,
      discount,
      advantages,
      disadvantages,
      specifications,
    });
    console.log(newProduct);

    return NextResponse.json({
      status: 201,
      message: "محصول با موفقیت ثبت شد",
    });
  } catch (error) {
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

    if (user.role !== "ADMIN") {
      return NextResponse.json({
        status: 403,
        error: "دسترسی شما برای این کار محدود شده است",
      });
    }

    const data = await req.json();

    const {
      title,
      description,
      quantity,
      price,
      images,
      category,
      discount,
      available,
      advantages,
      disadvantages,
      specifications,
      _id,
    } = data;

    const product = await Product.findOne({ _id });

    product.title = title;
    product.description = description;
    product.quantity = quantity;
    product.price = price;
    product.images = images;
    product.category = category;
    product.discount = discount;
    product.advantages = advantages;
    product.disadvantages = disadvantages;
    product.specifications = specifications;
    product.available = available;
    product.save();

    return NextResponse.json({
      status: 200,
      message: "تغییرات با موفقیت انجام شد",
    });
  } catch (error) {
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

    if (user.role !== "ADMIN") {
      return NextResponse.json({
        status: 403,
        error: "دسترسی شما برای این کار محدود شده است",
      });
    }

    const productIds = await req.json();
    console.log(productIds);
    await Product.deleteMany({
      _id: { $in: productIds },
    });
    return NextResponse.json({
      status: 200,
      message: "محصول با موفقیت حذف شد",
    });
  } catch (error) {
    return NextResponse.json({ status: 500, error: "مشکلی پیش آمده است" });
  }
}

export async function GET(req) {
  try {
    await connectDB();

    const products = await Product.find({});
    return NextResponse.json({ data: products });
  } catch (error) {
    console.log(error);
  }
}
