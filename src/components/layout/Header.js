import { getServerSession } from "next-auth";
import connectDB from "@/DB/connectDB";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import User from "@/models/User";
import DesktopHeader from "@/organisms/header/DesktopHeader";
import MobileHeader from "@/organisms/header/MobileHeader";

async function Header() {
  try {
    await connectDB();
  } catch (error) {
    console.log(error);
  }

  const session = await getServerSession(authOptions);
  const user = await User.findOne({ email: session?.user.email });
  return (
    <>
      <DesktopHeader role={user?.role} />
      <MobileHeader role={user?.role} />
    </>
  );
}

export default Header;
