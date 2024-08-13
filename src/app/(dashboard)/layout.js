import { getServerSession } from "next-auth";
import User from "@/models/User";
import connectDB from "@/DB/connectDB";
import { redirect } from "next/navigation";
import DashboardLayout from "@/layout/DashboardLayout";
import { authOptions } from "../api/auth/[...nextauth]/route";

async function layout({ children }) {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/signin");

  try {
    await connectDB();
  } catch (error) {
    console.log(error);
  }

  const user = await User.findOne({ email: session.user.email }).select(
    "-password"
  );

  return (
    <DashboardLayout user={JSON.parse(JSON.stringify(user))}>
      {children}
    </DashboardLayout>
  );
}

export default layout;