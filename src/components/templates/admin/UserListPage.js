import User from "@/models/User";
import TitlePage from "@/atoms/TitlePage";
import { getServerSession } from "next-auth";
import UsersTable from "@/organisms/admin/UsersTable";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

async function UserListPage() {
  const {
    user: { email },
  } = await getServerSession(authOptions);

  const { role } = await User.findOne({ email });

  return (
    <div className="admin-page">
      <TitlePage color="text-blue-400" borderColor="border-blue-400">
        جدول مدیریت کاربران
      </TitlePage>
      <UsersTable role={role} />
    </div>
  );
}

export default UserListPage;
