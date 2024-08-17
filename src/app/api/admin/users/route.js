import connectDB from "@/DB/connectDB";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "@/api/auth/[...nextauth]/route";
import User from "@/models/User";

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
        message: "دسترسی به این بخش برای شما امکان پذیر نیست.",
      });
    }
    const url = new URL(req.url);
    const searchTerm = url.searchParams.get("search");
    const page = parseInt(url.searchParams.get("page")) || 1;
    const rowsPerPage = parseInt(url.searchParams.get("rowsPerPage")) || 5;

    const totalCountUsers = await User.countDocuments();

    let users;

    if (!searchTerm) {
      const skipRows = (page - 1) * rowsPerPage;
      users = await User.find({}).skip(skipRows).limit(rowsPerPage);
    } else {
      const words = searchTerm.split(" ").filter(Boolean);

      const regex = new RegExp(
        words.map((word) => `(?=.*${word})`).join(""),
        "i"
      );

      users = await User.find({
        $or: [
          { firstName: regex },
          { lastName: regex },
          {
            $expr: {
              $regexMatch: {
                input: { $concat: ["$firstName", " ", "$lastName"] },
                regex: regex,
              },
            },
          },
        ],
      });
    }

    return NextResponse.json({ users, totalCountUsers });
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
      ? await User.deleteMany({ role: { $ne: "OWNER" } })
      : await User.deleteMany({ _id: { $in: ids } });

    return NextResponse.json({
      status: 200,
      message: "کاربر با موفقیت حذف شد",
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
    const { ids, selectedKeys } = await req.json();

    if (!ids || !selectedKeys)
      return NextResponse.json({
        status: 422,
        error: "مقادیر مورد نیاز وجود ندارد!!",
      });

    selectedKeys === "all"
      ? await User.updateMany({ role: { $ne: "OWNER" } }, [
          {
            $set: {
              status: {
                $cond: {
                  if: { $eq: ["$status", "authorized"] },
                  then: "unauthorized",
                  else: "authorized",
                },
              },
            },
          },
        ])
      : await User.updateMany({ _id: { $in: ids } }, [
          {
            $set: {
              status: {
                $cond: {
                  if: { $eq: ["$status", "authorized"] },
                  then: "unauthorized",
                  else: "authorized",
                },
              },
            },
          },
        ]);

    return NextResponse.json({
      status: 200,
      message: "تغییر وضعیت کاربر با موفقیت انجام شده",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 500, error: "مشکلی پیش آمده است" });
  }
}
