import { Bar, BarChart } from "recharts";

function Page5({ data }) {
  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <YAxis />
          <XAxis dataKey="month" />
          <CartesianGrid strokeDasharray={"3 3"} />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar dataKey={"value1"} stroke="red" fill="red">
            {data.map((_entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
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
export default Page5;
