import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "فروردین",
    نفر: 2400,
  },
  {
    name: "اردیبهشت",
    نفر: 1398,
  },
  {
    name: "خرداد",
    نفر: 9600,
  },
  {
    name: "تیر",
    نفر: 3908,
  },
  {
    name: "مرداد",
    نفر: 4800,
  },
  {
    name: "شهریور",
    نفر: 3800,
  },
  {
    name: "مهر",
    نفر: 2340,
  },
  {
    name: "آبان",
    نفر: 1320,
  },
  {
    name: "آذر",
    نفر: 8320,
  },
  {
    name: "دی",
    نفر: 5300,
  },
  {
    name: "بهمن",
    نفر: 7320,
  },
  {
    name: "اسفند",
    نفر: 4300,
  },
];

export default function AmountVisitSiteChart() {
  return (
    <div className="flex flex-col items-center justify-center">
      <LineChart
        className="pr-10"
        width={550}
        height={400}
        data={data}
        margin={{
          right: 20,
        }}
      >
        <CartesianGrid strokeDasharray="4 4" />
        <XAxis className="text-xs" dataKey="name" />
        <YAxis />
        <Tooltip />

        <Line
          type="monotone"
          dataKey="نفر"
          stroke="#6366f1"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>

      <h1 className="text-lg font-bold mt-2 text-zinc-700 dark:text-zinc-300">
        نمودار بازدید ماهانه از سایت
      </h1>
    </div>
  );
}
