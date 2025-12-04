import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const data = [
  { name: "Chrome", value: 68 },
  { name: "Safari", value: 19 },
  { name: "Firefox", value: 4 },
  { name: "Edge", value: 8 },
  { name: "Other", value: 1 },
];

const color = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AA00FF"];

export default function Page7() {
  return (
    <>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={120}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={color[index % color.length]} />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />}/>
        

        <Legend verticalAlign="bottom" height={36} />
      </PieChart>
    </>
  );
}


const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { name, value, percent } = payload[0];
    return (
      <div
        style={{
          backgroundColor: "#333",
          color: "#fff",
          padding: "10px 15px",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
          fontSize: "14px",
          textAlign: "center",
        }}
      >
        <strong>{name}</strong>
        <p>{`Value: ${value} %`}</p>
      </div>
    );
  }

  return null;
};