"use client";

import AmountVisitSiteChart from "@/organisms/admin/chart/AmountVisitSiteChart";
import WarehouseStockChart from "@/organisms/admin/chart/WarehouseStockChart";
import AmountOfSalesChart from "@/organisms/admin/chart/AmountOfSalesChart";
import {
  BanknotesIcon,
  ChartPieIcon,
  ExclamationCircleIcon,
  PresentationChartLineIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import useIsClient from "src/hooks/useIsClient";
import CardPanel from "@/molecules/common/CardPanel";

const listCardAdminPanel = [
  {
    title: "بازدید امروز سایت",
    unit: "نفر",
    bgColor: "bg-amber-300",
    bgColorIcon: "bg-amber-200",
    count: 310,
    icon: <ChartPieIcon className="md:w-7 md:h-7 lg:w-10 lg:h-10" />,
  },
  {
    title: "فروش امروز سایت",
    unit: "تومان",
    bgColor: "bg-green-500",
    bgColorIcon: "bg-green-400",
    count: 23120000,
    icon: <BanknotesIcon className="md:w-7 md:h-7 lg:w-10 lg:h-10" />,
  },
  {
    title: "مجموع فروش سایت",
    unit: "تومان",
    bgColor: "bg-rose-600",
    bgColorIcon: "bg-rose-500",
    count: 540310000,
    icon: (
      <PresentationChartLineIcon className="md:w-7 md:h-7 lg:w-10 lg:h-10" />
    ),
  },
  {
    title: "کاربران فعال سایت",
    unit: "نفر",
    bgColor: "bg-blue-500",
    bgColorIcon: "bg-blue-400",
    count: 2310,
    icon: <UserGroupIcon className="md:w-7 md:h-7 lg:w-10 lg:h-10" />,
  },
];

function AdminPanelPage() {
  const isClient = useIsClient();

  return (
    isClient && (
      <div className="dashboard-page flex flex-col">
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-2 mb-10">
          {listCardAdminPanel.map((i, index) => (
            <CardPanel
              key={index}
              title={i.title}
              value={i.count}
              bgColor={i.bgColor}
              icon={i.icon}
              unit={i.unit}
              bgColorIcon={i.bgColorIcon}
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
          <h1 className="font-bold text-sm text-center">
            نمایش چارت ها در سایز تبلت یا کامپیوتر امکانپدیر است
          </h1>
        </div>
      </div>
    )
  );
}

export default AdminPanelPage;
