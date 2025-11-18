import {
  BarChart,
  Bar,
  ResponsiveContainer,
  YAxis,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
function Page2({ data }) {
  return (
    <>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <YAxis />
            <XAxis dataKey="month" />
            <CartesianGrid strokeDasharray={"2 2"} />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Bar dataKey={"value1"} stroke="red" fill="red" />
            <Bar dataKey={"value2"} stroke="blue" fill="blue" />
          </BarChart>
        </ResponsiveContainer>
    </>
  );
}

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
        <p className="text-medium text-lg text-amber-50">{label}</p>
        <p className="text-sm text-red-400">
          Product1:
          <span className="ml-2">{payload[0].value}$</span>
        </p>
        <p className="text-sm text-blue-400">
          Product2:
          <span className="ml-2">{payload[1].value}$</span>
        </p>
      </div>
    );
  }
};

export default Page2;
