import { useEffect, useState } from "react"


function Undereheader({params}) {
    const [render,setRender] = useState("navbar1")
    
    useEffect(()=>{
        setRender("")
        setTimeout(()=>{
            setRender("navbar1")
        },10)
    },params)

    return(
        <> 
    
             <div className={`${params[0]?render:""} max-w-[800px] m-auto p-4`}>
                <h1 className="text-white text-2xl font-serif"> Explore {params[1]}</h1>
                <br /> 
                <hr className="text-white" />
                <br />
                <ul className="text-white">
                    <li>Obj from server</li>
                    <li>Obj from server</li>
                    <li>Obj from server</li>
                    <li>Obj from server</li>
                </ul>
            </div>
            
        
        </>
    )
}

export default Undereheader