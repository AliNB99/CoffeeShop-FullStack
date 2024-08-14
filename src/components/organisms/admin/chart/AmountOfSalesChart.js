import { sp } from "@/utils/helper/replaceNumber";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const data = [
  {
    name: "قهوه",
    amt: 122030000,
  },
  {
    name: "لوازم جانبی",
    amt: 81204000,
  },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white flex flex-col items-center justify-center p-3 rounded-lg shadow-medium">
        <span>{`${label} :`}</span>
        <span>{sp(payload[0].value)} تومان</span>
      </div>
    );
  }

  return null;
};

export default function AmountOfSalesChart() {
  return (
    <div className="flex flex-col items-center justify-center">
      <BarChart
        className="pr-5"
        width={300}
        height={400}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" scale="point" padding={{ left: 50, right: 60 }} />
        <YAxis />
        <Tooltip className="bg-zinc-300" content={<CustomTooltip />} />
        <Bar
          barSize={30}
          dataKey="amt"
          fill="#6366f1"
          background={{ fill: "#eee" }}
        />
      </BarChart>
      <h1 className="text-lg font-bold text-zinc-700 dark:text-zinc-300">
        مجموع فروش بر اساس دسته بندی
      </h1>
    </div>
  );
}
