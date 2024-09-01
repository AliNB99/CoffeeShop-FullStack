import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import DashboardLayout from "@/layout/DashboardLayout";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import connectDB from "@/DB/connectDB";
import User from "@/models/User";

export const metadata = {
  title: "Golden Coffee | پنل کاربری",
  description: "خرید و فروش قهوه و لوازم ساخت قهوه",
  icons: { icon: "./images/fav-icon.png" },
};

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
