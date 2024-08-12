import UserInformation from "@/organisms/user/UserInformation";

function UserPage({ user }) {
  return (
    <div className="dashboard-page">
      <UserInformation user={user} />
    </div>
  );
}

export default UserPage;
