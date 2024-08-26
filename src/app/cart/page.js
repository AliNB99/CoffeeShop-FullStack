import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import CartPage from "@/templates/CartPage";
import { redirect } from "next/navigation";
import connectDB from "@/DB/connectDB";
import User from "@/models/User";

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

  if (!user) redirect("/signin");
  return <CartPage user={user} />;
}

export default Cart;
