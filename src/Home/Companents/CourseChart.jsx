import { Trans, useTranslation } from "react-i18next";

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

function Coursechart({ data }) {
    const { i18n } = useTranslation();
  
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data}>
        <YAxis domain={["dataMin - 50", "dataMax + 50"]} />
        <XAxis dataKey="date" />
        <CartesianGrid className="dark:stroke-white" strokeDasharray={"2 2"} />
        <Tooltip content={<CustomTooltip />} />
        <Legend
   
    content={() => <div className="dark:text-gray-300 text-center font-serif font-bold"> 
      <Trans i18nKey="course_of_dollor" />
    </div>}
  />
        <Area dataKey={"course"} stroke={"gray"} fill={"gray"} />
      </AreaChart>
    </ResponsiveContainer>
  );
}

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 text-white  bg-slate-900 flex flex-col gap-4 rounded-md">
        <p className="text-medium text-lg ">              <Trans i18nKey="course_of_dollor" />
        </p>
        <p className={`text-sm `}>
          1$ --
          <span className="ml-2">{payload[0].value}sum</span> / <span className="bold">{label}</span>
        </p>
      </div>
    );
  }
};

export default Coursechart;
