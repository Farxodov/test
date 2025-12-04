import { useEffect, useState } from "react";
import { Pagestext } from "./Underheader/Pagestext";

function Undereheader({ params }) {
  const [render, setRender] = useState("navbar1");
  const [number, setNumber] = useState();
  useEffect(() => {
    setRender("");
    setTimeout(() => {
      setRender("navbar1" + "");
    }, 50);
    setNumber(localStorage.getItem("number"));
  }, params);

  return (
    <>
      <div className={`${params[0] ? render : ""} max-w-[800px] m-auto p-4`}>
        <h1 className="text-white text-2xl font-serif"> Explore {params[1]}</h1>
        <br />
        <hr className="text-white" />
        <br />
        { params[1]=="Pages"? Pagestext():""}
      </div>
    </>
  );
}

export default Undereheader;
