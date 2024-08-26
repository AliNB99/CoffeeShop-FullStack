import Product from "@/models/Product";
import User from "@/models/User";
import connectDB from "@/DB/connectDB";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "@/api/auth/[...nextauth]/route";

export async function GET(req) {
  try {
    await connectDB();

    const {
      user: { email },
    } = await getServerSession(authOptions);

    const user = await User.findOne({ email });

    if (user.status !== "authorized") {
      return NextResponse.json({
        status: 403,
        error: "دسترسی شما به سایت مسدود شده است",
      });
    }

    if (user.role !== "OWNER" && user.role !== "ADMIN") {
      return NextResponse.json({
        status: 422,
        error: "دسترسی به این بخش برای شما امکان پذیر نیست.",
      });
    }
    const url = new URL(req.url);
    const searchTerm = url.searchParams.get("search");
    const page = parseInt(url.searchParams.get("page")) || 1;
    const rowsPerPage = parseInt(url.searchParams.get("rowsPerPage")) || 5;

    const totalCountProducts = await Product.countDocuments();

    let products;

    if (!searchTerm) {
      const skipRows = (page - 1) * rowsPerPage;
      products = await Product.find({}).skip(skipRows).limit(rowsPerPage);
    } else {
      const words = searchTerm.split(" ").filter(Boolean);

      const regex = new RegExp(
        words.map((word) => `(?=.*${word})`).join(""),
        "i"
      );

      products = await Product.find({
        $or: [{ title: regex }],
      });
    }

    return NextResponse.json({ products, totalCountProducts });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 500, error: "مشکلی پیش آمده است" });
  }
}

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
    } = await req.json();

    if (!title || !description || !quantity || !price || !category) {
      return NextResponse.json({
        status: 422,
        error: "لطفا تمام مقادیر لازم را وارد نمایید",
      });
    }

    await Product.create({
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

    return NextResponse.json({
      status: 201,
      message: "محصول با موفقیت ثبت شد",
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

    const { action, id, ids, form, selectedKeys } = await req.json();

    switch (action) {
      case "editProduct":
        const {
          title,
          description,
          quantity,
          price,
          images,
          category,
          discount,
          status,
          advantages,
          disadvantages,
          specifications,
          _id,
        } = form;

        const product = await Product.findOne({ _id: id || _id });

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
        product.status = status;
        product.save();

        return NextResponse.json({
          status: 200,
          message: "تغییرات با موفقیت انجام شد",
        });
      case "changeStatus":
        selectedKeys === "all"
          ? await Product.updateMany({}, [
              {
                $set: {
                  status: {
                    $cond: {
                      if: { $eq: ["$status", "available"] },
                      then: "unavailable",
                      else: "available",
                    },
                  },
                },
              },
            ])
          : await Product.updateMany({ _id: { $in: ids } }, [
              {
                $set: {
                  status: {
                    $cond: {
                      if: { $eq: ["$status", "available"] },
                      then: "unavailable",
                      else: "available",
                    },
                  },
                },
              },
            ]);
        return NextResponse.json({
          status: 200,
          message: "تغییر وضعیت محصول با موفقیت انجام شد",
        });
      default:
        return NextResponse.json({
          status: 422,
          error: "اطلاعات مورد نیاز یافت نشد.",
        });
    }
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

    const { ids, selectedKeys } = await req.json();

    selectedKeys === "all"
      ? await Product.deleteMany({})
      : await Product.deleteMany({
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
