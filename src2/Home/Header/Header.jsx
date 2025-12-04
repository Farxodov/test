import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Underheader from "./Underheader";
import "./Header.css";
import Underheader_s from "./Underheader_s";
const logo = "./bank.png";

export default function Header() {
  const list = [
    {
      id: 1,
      name: "charts",
    },
    {
      id: 2,
      name: "Smth2",
    },
    {
      id: 3,
      name: "Smth3",
    },
    {
      id: 4,
      name: "Smth4",
    },
    {
      id: 5,
      name: "Smth5",
    },
    {
      id: 6,
      name: "Smth6",
    },
    {
      id: 7,
      name: "Smth7",
    },
    {
      id: 8,
      name: "Smth8",
    },
    {
      id: 9,
      name: "Smth9",
    },
  ];

  const [isHovered, setIsHovered] = useState([false], "");
  const [isHoveredS, setIsHoveredS] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsHovered([false, ""]);
    setIsHoveredS(false);
  }, [useLocation()]);

  function fHover(params) {
    setIsHovered([true, params]);
    setIsHoveredS(false);
  }

  return (
    <>
      <div className="w-screen bg-[#1D1D1F] ">
        <div
          onMouseLeave={() => {
            setIsHovered([false, isHovered[1]]);
            setIsHoveredS(false);
          }}
          className={`sticky z-40 w-full left-0 px-4 bg-[#1D1D1F] transition-all`}
        >
          <div className="flex z-50 justify-between items-center max-w-[1440px] m-auto px-2">
            <img
              onMouseEnter={() => {
                setIsHovered([false, isHovered[1]]);
                setIsHoveredS(false);
              }}
              onClick={() => {
                navigate("/");
              }}
              className="brightness-0 invert-[1] min-w-[30px] hover:scale-[1.1] transition-all cursor-pointer"
              src={logo}
              alt="bank logo"
            />
            <ul className="text-[#c4c4c4] font-semibold cursor-pointer hidden 1md:text-[20px] lg:text-[25px]  1xl:text-[30px] 1md:flex justify-between items-center w-full m-5">
              {list.map((item, index) => (
                <li
                  key={item.id}
                  onMouseEnter={() => fHover(item.name)}
                  className="hover:scale-[1.05] transition-all  hover:text-gray-100"
                  onClick={() => {
                    navigate("/" + item.name);
                  }}
                >
                  {item.name}
                </li>
              ))}
            </ul>
            <div className="flex justify-around gap-3 1md:w-[10%]">
              <svg
                onMouseEnter={() => {
                  setIsHovered([false, isHovered[1]]);
                  setIsHoveredS(true);
                }}
                className="fill-[#c4c4c4] cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  minWidth: "30px",
                  maxWidth: "30px",
                }}
                viewBox="0 0 15 44"
              >
                <path d="M14.298,27.202l-3.87-3.87c0.701-0.929,1.122-2.081,1.122-3.332c0-3.06-2.489-5.55-5.55-5.55c-3.06,0-5.55,2.49-5.55,5.55 c0,3.061,2.49,5.55,5.55,5.55c1.251,0,2.403-0.421,3.332-1.122l3.87,3.87c0.151,0.151,0.35,0.228,0.548,0.228 s0.396-0.076,0.548-0.228C14.601,27.995,14.601,27.505,14.298,27.202z M1.55,20c0-2.454,1.997-4.45,4.45-4.45 c2.454,0,4.45,1.997,4.45,4.45S8.454,24.45,6,24.45C3.546,24.45,1.55,22.454,1.55,20z"></path>
              </svg>
              <svg
                onMouseEnter={() => {
                  setIsHovered([false, isHovered[1]]);
                  setIsHoveredS(false);
                }}
                style={{
                  minWidth: "25px",
                  maxWidth: "25px",
                }}
                className="fill-[#c4c4c4] cursor-pointer"
                viewBox="0 0 14 44"
                width="25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m11.3535 16.0283h-1.0205a3.4229 3.4229 0 0 0 -3.333-2.9648 3.4229 3.4229 0 0 0 -3.333 2.9648h-1.02a2.1184 2.1184 0 0 0 -2.117 2.1162v7.7155a2.1186 2.1186 0 0 0 2.1162 2.1167h8.707a2.1186 2.1186 0 0 0 2.1168-2.1167v-7.7155a2.1184 2.1184 0 0 0 -2.1165-2.1162zm-4.3535-1.8652a2.3169 2.3169 0 0 1 2.2222 1.8652h-4.4444a2.3169 2.3169 0 0 1 2.2222-1.8652zm5.37 11.6969a1.0182 1.0182 0 0 1 -1.0166 1.0171h-8.7069a1.0182 1.0182 0 0 1 -1.0165-1.0171v-7.7155a1.0178 1.0178 0 0 1 1.0166-1.0166h8.707a1.0178 1.0178 0 0 1 1.0164 1.0166z"></path>
              </svg>
            </div>
          </div>

          <>
            <div className={`w-full m-auto ${isHovered[0] ? "nav1" : ""} nav2`}>
              <Underheader params={isHovered} />
            </div>
          </>
          <>
            <div className={`w-full m-auto ${isHoveredS ? "nav1" : ""} nav2`}>
              <Underheader_s />
            </div>
          </>
        </div>
      </div>
    </>
  );
}
