import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import connectDB from "@/DB/connectDB";
import User from "@/models/User";
import CartPage from "@/templates/user/CartPage";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

async function Cart() {
  try {
    await connectDB();
  } catch (error) {
    console.log(error);
  }

  const {
    user: { email },
  } = await getServerSession(authOptions);
  const user = await User.findOne({ email });

  if (user.role !== "USER") redirect("/admin");
  return <CartPage user={user} />;
}

export default Cart;
