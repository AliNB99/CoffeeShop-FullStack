import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import SignInPage from "@/templates/SignInPage";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

async function SignIn() {
  const session = await getServerSession(authOptions);
  if (session) redirect("/");

  return (
    <div>
      <SignInPage />
      
    </div>
  );
}

export default SignIn;
