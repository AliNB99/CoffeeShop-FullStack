import TitlePage from "@/atoms/TitlePage";
import CommentsTable from "@/organisms/admin/CommentTable";
import React from "react";

function CommentListPage() {
  return (
    <div className="dashboard-page">
      <TitlePage color="text-pink-500" borderColor="border-pink-500">
        جدول مدیریت دیدگاه ها
      </TitlePage>
      <CommentsTable />
    </div>
  );
}

export default CommentListPage;
