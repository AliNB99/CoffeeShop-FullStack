import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import ProductsTable from "@/organisms/admin/table/ProductsTable";
import { getServerSession } from "next-auth";
import TitlePage from "@/atoms/TitlePage";
import connectDB from "@/DB/connectDB";
import User from "@/models/User";

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
    <div className="dashboard-page">
      <TitlePage color="text-violet-700" borderColor="border-violet-700">
        جدول مدیریت محصولات
      </TitlePage>
      <ProductsTable role={role} />
    </div>
  );
}

export default ProductsListPage;
