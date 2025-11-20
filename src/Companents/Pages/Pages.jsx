import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import "../../CSS/Pages.css";
import { useEffect, useState } from "react";
import Page4 from "./Page4";
import Page5 from "./Page5";
import Page6 from "./Page6";
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
  const [color1, setColor1] = useState(
    !localStorage.getItem("color1") ? "blue" : localStorage.getItem("color1")
  );
  const [color2, setColor2] = useState(
    !localStorage.getItem("color2") ? "red" : localStorage.getItem("color2")
  );
  const number_of_charts = 6;

  useEffect(() => {
    if (!localStorage.getItem("color1") && !localStorage.getItem("color2")) {
      setColor1("blue");
      setColor1("red");
      localStorage.setItem("color1", ["blue"]);
      localStorage.setItem("color2", ["red"]);
    }
  }, []);

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

  function handleChange(p) {
    setNumber(p.target.value);
  }

  function color(p) {
    if (p[0]) {
      setColor1(p[1].target.value);
    } else {
      setColor2(p[1].target.value);
    }

    localStorage.setItem("color1", [color1]);
    localStorage.setItem("color2", [color2]);
  }

  return (
    <>
      <div className="flex justify-around items-center h-[35px]">
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
        <h1 className="text-white">
          Chart:{number}/{number_of_charts}
        </h1>
        <div className="flex gap-3 items-center">
          <label
            htmlFor="keys"
            className="block text-[12px] text-white font-semibold"
          >
            Choose a key:
          </label>
          <select
            onChange={handleChange}
            id="keys"
            className="w-[50px] bg-gray-900 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
          >
            {Array.from({ length: number_of_charts }).map((key, index) => (
              <option key={index} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
          <input
            onChange={(p) => color([true, p])}
            type="color"
            value={color1}
            style={{ background: color1 }}
            className={`w-[30px] h-[30px] rounded-full border-2 border-gray-700 cursor-pointer shadow-lg transition-transform hover:scale-110`}
          />
          <input
            onChange={(p) => color([false, p])}
            type="color"
            value={color2}
            style={{ background: color2 }}
            className={`w-[30px] h-[30px] rounded-full border-2 border-gray-700 cursor-pointer shadow-lg transition-transform hover:scale-110`}
          />
        </div>
        <button
          onClick={() => click("plus")}
          className="bg-white rounded-full p-1"
        >
          <img className="w-6 h-6" src="./images/next.png" alt="next" />
        </button>
      </div>
      {true ? " " : ""}
      <br />
      <div className="w-full">
        {number == 1 ? (
          <div className="w-[80%] m-auto h-[400px]">
            <Page1 data={data} color={[color1, color2]} />
          </div>
        ) : number == 2 ? (
          <div className="w-[80%] m-auto h-[400px]">
            <Page2 data={data} color={[color1, color2]} />
          </div>
        ) : number == 3 ? (
          <div className="w-[80%] m-auto h-[400px]">
            <Page3 data={data} color={[color1, color2]} />
          </div>
        ) : number == 4 ? (
          <div className="w-[80%] m-auto h-[400px]">
            <Page4 data={data} color={[color1, color2]} />
          </div>
        ) : number == 5 ? (
          <div className="w-[80%] m-auto h-[400px]">
            <Page5 data={data} color={[color1, color2]} />
          </div>
        ) : number == 6 ? (
          <div className="w-[80%] m-auto h-[400px]">
            <Page6 data={data} color={[color1, color2]} />
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default Pages;
