import { PieChart, Pie, Cell, Legend } from "recharts";

const fakeData = [
  { name: "قهوه", value: 400 },
  { name: "لوازم جانبی", value: 300 },
];

const COLORS = ["#0088FE", "#facc15"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function WarehouseStockChart() {
  return (
    <div className="flex flex-col items-center justify-center">
      <PieChart width={300} height={400}>
        <Pie
          data={fakeData}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={120}
          fill="#8884d8"
          dataKey="value"
        >
          {fakeData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend width={300} />
      </PieChart>
      <h1 className="text-lg font-bold text-zinc-700 dark:text-zinc-300">
        نمودار موجودی انبار
      </h1>
    </div>
  );
}
