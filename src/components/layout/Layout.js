import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import connectDB from "@/DB/connectDB";
import Header from "@/layout/Header";
import User from "@/models/User";
import Overlay from "@/molecules/common/Overlay";
import { getServerSession } from "next-auth";
import Footer from "./Footer";
// import Footer from "@/layout/Footer";

async function Layout({ children }) {
  try {
    await connectDB();
  } catch (error) {
    console.log(error);
  }

  const session = await getServerSession(authOptions);
  const user = await User.findOne({ email: session?.user.email });
  return (
    <>
      <Header role={user?.role} />
      <div>{children}</div>
      <Overlay />
      <Footer />
    </>
  );
}

export default Layout;
