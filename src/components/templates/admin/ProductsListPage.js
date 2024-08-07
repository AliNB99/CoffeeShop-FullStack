import User from "@/models/User";
import connectDB from "@/DB/connectDB";
import TitlePage from "@/atoms/TitlePage";
import { getServerSession } from "next-auth";
import ProductsTable from "@/organisms/admin/ProductsTable";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

async function ProductsListPage() {
  try {
    await connectDB();
  } catch (error) {
    console.log(error);
  }

  const {
    user: { email },
  } = await getServerSession(authOptions);

  const { role } = await User.findOne({ email });

  return (
    <div className="admin-page">
      <TitlePage color="text-violet-700" borderColor="border-violet-700">
        جدول مدیریت محصولات
      </TitlePage>
      <ProductsTable role={role} />
    </div>
  );
}

export default ProductsListPage;
