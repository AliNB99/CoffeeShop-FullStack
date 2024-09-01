import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import UserPage from "@/templates/user/UserPage";
import { getServerSession } from "next-auth";
import connectDB from "@/DB/connectDB";
import User from "@/models/User";

async function UserInfo() {
  try {
    await connectDB();
  } catch (error) {
    console.log(error);
  }

  const {
    user: { email },
  } = await getServerSession(authOptions);
  const user = await User.findOne({ email });

  return <UserPage user={JSON.parse(JSON.stringify(user))} />;
}

export default UserInfo;
