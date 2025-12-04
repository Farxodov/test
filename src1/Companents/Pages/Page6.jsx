import {
  AreaChart,
  Area,
  ResponsiveContainer,
  YAxis,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

let colors;
function Page6({ data , color}) {
  colors=color;
  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <YAxis />
          <XAxis dataKey="month" />
          <CartesianGrid strokeDasharray={"2 2"} />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Area
            type={"monotone"}
            dataKey={"value1"}
            stroke={color[0]}
            fill={color[0]}
            stackId={1}
          />
          <Area
            type={"monotone"}
            dataKey={"value2"}
            stroke={color[1]}
            fill={color[1]}
            stackId={1}
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
}

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
        <p className="text-medium text-lg text-amber-50">{label}</p>
        <p style={{color:colors[0]}} className="text-sm">
          Product1:
          <span className="ml-2">{payload[0].value}$</span>
        </p>
        <p style={{ color: colors[1] }} className="text-sm">
          Product2:
          <span className="ml-2">{payload[1].value}$</span>
        </p>
        <hr className="text-white"/>
        <p className="text-sm text-white">
            All:
            <span className="ml-2">{payload[0].value + payload[1].value}$</span>
        </p>
      </div>
    );
  }
};

export default Page6;
