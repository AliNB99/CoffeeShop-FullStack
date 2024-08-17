"use client";

import CardAdminPanel from "@/molecules/admin/CardAdminPanel";
import AmountOfSalesChart from "@/organisms/admin/chart/AmountOfSalesChart";
import AmountVisitSiteChart from "@/organisms/admin/chart/AmountVisitSiteChart";
import WarehouseStockChart from "@/organisms/admin/chart/WarehouseStockChart";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import useIsClient from "src/hooks/useIsClient";

const listCardAdminPanel = [
  { title: "آمار بازدید امروز سایت", bgColor: "bg-orange-400", count: 310 },
  {
    title: "میزان فروش امروز سایت(تومان)",
    bgColor: "bg-emerald-500",
    count: 23120000,
  },
  { title: "مجموع فروش سایت(تومان)", bgColor: "bg-sky-500", count: 540310000 },
  { title: "تعداد کاربران فعال سایت", bgColor: "bg-pink-500", count: 2310 },
];

function AdminPanelPage() {
  const isClient = useIsClient();

  return (
    isClient && (
      <div className="dashboard-page flex flex-col">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-2 mb-10">
          {listCardAdminPanel.map((i, index) => (
            <CardAdminPanel
              key={index}
              title={i.title}
              count={i.count}
              bgColor={i.bgColor}
            />
          ))}
        </div>
        <div className="hidden sm:flex flex-col md:flex-row justify-center items-center gap-5 bg-white dark:bg-zinc-900 shadow-medium rounded-2xl px-3 py-7">
          <AmountOfSalesChart />
          <AmountVisitSiteChart />
          <WarehouseStockChart />
        </div>
        <div className="bg-white dark:bg-zinc-700 shadow-medium flex sm:hidden flex-col items-center justify-center gap-4 rounded-2xl w-full h-full p-3">
          <ExclamationCircleIcon className="w-16 h-16 text-red-500" />
          <h1 className="font-bold text-sm">
            نمایش چارت ها در سایز تبلت یا کامپیوتر امکانپدیر است
          </h1>
        </div>
      </div>
    )
  );
}

export default AdminPanelPage;
