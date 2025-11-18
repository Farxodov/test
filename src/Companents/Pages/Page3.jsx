import { LineChart, Line ,ResponsiveContainer , YAxis ,XAxis,CartesianGrid, Tooltip, Legend} from "recharts"  
function Page3({data}) {
    


    return (
        <>
                <ResponsiveContainer width="100%" height="100%">
                        
                        <LineChart data={data}> 
                           <YAxis/>
                            <XAxis dataKey="month"/>
                            <CartesianGrid strokeDasharray={"2 2"}/>
                            <Tooltip content={<CustomTooltip/>}/>
                             <Legend/>
                             <Line 
                             dataKey={"value1"}
                             stroke="red"
                             fill="red"
                             />
                              <Line 
                             dataKey={"value2"}
                             stroke="blue"
                             fill="blue"

                             />
                        </LineChart>
                </ResponsiveContainer>
        </>
    )
}


const CustomTooltip = ({
    active, payload, label
}) => {
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
        )
    }
}

export default Page3