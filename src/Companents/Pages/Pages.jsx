import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import "../../CSS/Pages.css";
import { useState } from "react";
import Page4 from "./Page4";
function Pages() {
  const data = [
    {
      month: "May",
      value1: 100,
      value2: 200,
    },
    {
      month: "July",
      value1: 300,
      value2: 400,
    },
    {
      month: "June",
      value1: 340,
      value2: 280,
    },
    {
      month: "August",
      value1: 50,
      value2: 700,
    },
    {
      month: "September",
      value1: 50,
      value2: 700,
    },
    {
      month: "October",
      value1: 500,
      value2: 200,
    },
    {
      month: "November",
      value1: 70,
      value2: 20,
    },
  ];

  const [number, setNumber] = useState(1);
  const number_of_charts = 4;

  function click(p) {
    if (p === "minus") {
      if (number !== 1) {
        setNumber(number - 1);
      } else {
        setNumber(number_of_charts);
      }
    } else {
      if (number !== number_of_charts) {
        setNumber(number + 1);
      } else {
        setNumber(1);
      }
    }
  }

  return (
    <>
     <div className="flex justify-around">
        <button
          onClick={() => click("minus")}
          className="bg-white rounded-full p-1"
        >
          <img
            className="w-6 h-6 rotate-180"
            src="./images/next.png"
            alt="next"
          />
        </button>
        <h1 className="text-white ">
          Chart:{number}/{number_of_charts}
        </h1>
        <button
          onClick={() => click("plus")}
          className="bg-white rounded-full p-1"
        >
          <img
            className="w-6 h-6"
            src="./images/next.png"
            alt="next"
          />
        </button>
      </div>
       {  true ? " " :""}
      <br />
      <div className="w-full">
        {number == 1 ? (
          <div className="w-[80%] m-auto h-[400px]">
            <Page1 data={data} />
          </div>
        ) : number == 2 ? (
          <div className="w-[80%] m-auto h-[400px]">
            <Page2 data={data} />
          </div>
        ) : number == 3 ? (
          <div className="w-[80%] m-auto h-[400px]">
            <Page3 data={data} />
          </div>
        ) : number == 4? (
          <Page4 data={data} />
        ) : "" }
      </div>
     
    </>
  );
}

export default Pages;
