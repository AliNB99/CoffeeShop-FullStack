import { getServerSession } from "next-auth";
import User from "@/models/User";
import connectDB from "@/DB/connectDB";
import { redirect } from "next/navigation";
import AdminLayout from "@/layout/AdminLayout";
import { authOptions } from "../api/auth/[...nextauth]/route";

async function layout({ children }) {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/signin");

  try {
    await connectDB();
  } catch (error) {
    console.log(error);
  }

  const user = await User.findOne({ email: session.user.email });
  if (user.role === "USER") redirect("/");

  return <AdminLayout role={user.role}>{children}</AdminLayout>;
}

export default layout;
