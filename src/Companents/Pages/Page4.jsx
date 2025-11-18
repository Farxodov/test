import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

function Page4({ data }) {

  return (
    <div className="flex justify-center">
        <RadarChart
          style={{
            width: "100%",
            maxWidth: "500px",
            maxHeight: "80vh",
            aspectRatio: 1,
          }}
          responsive
          outerRadius="80%"
          data={data}
        >
          <PolarGrid />
          <PolarAngleAxis dataKey="month" />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <Tooltip content={<CustomTooltip/>}/>
          <Radar
            dataKey="value1"
            stroke="red"
            fill="red"
            fillOpacity={0.6}
          />
          <Radar
            dataKey="value2"
            stroke="blue"
            fill="blue"
            fillOpacity={0.6}
          />
          <Legend />
        </RadarChart>
    </div>
  );
}

const CustomTooltip = ({
    active, payload, label
}) => {
    if (active && payload && payload.length) {
        return (
            <div className="p-4 bg-slate-900 flex flex-col gap-1 rounded-md">
                <p className="text-medium text-[15px] text-amber-50">{label}</p>
                <p className="text-sm text-red-400">
                    Product1:
                        <span className="ml-2">{payload[0].value}$</span>
                </p>
                  <p className="text-sm text-blue-400">
                    Product2:
                        <span className="ml-2">{payload[1].value}$</span>
                </p>
            </div>
        )
    }
}

export default Page4;
