import { useState } from "react";
import Undereheader from "./Underheader";
import "../../CSS/Header.css";
import Undereheader_s from "./Underheader_s";
import { useTranslation } from "react-i18next";
import bankLogo from "../../../public/images/bank.png"
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
function Header() {
  const [isHovered, setIsHovered] = useState([false], "");
  const [isHoveredS, setIsHoveredS] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate()
 
  

  function fHover(params) {
    setIsHovered([true, params]);
    setIsHoveredS(false);
  }

  return (
    <div className="w-screen bg-[#1D1D1F] ">
      <div
        onMouseLeave={() => {
          setIsHovered([false, isHovered[1]]);
          setIsHoveredS(false);
        }}
        className={`fixed z-40 w-full left-0 px-4 bg-[#1D1D1F] transition-all`}
      >
        <div className="flex z-50 justify-center  gap-5 items-center max-w-[800px] m-auto px-2">
          <img
            onMouseEnter={() => {
              setIsHovered([false, isHovered[1]]);
              setIsHoveredS(false);
            }}
            onClick={()=>{navigate("/")}}
            className="brightness-0 invert-[1]"
            src={bankLogo}
            alt="bank logo"
          />
          <ul className="text-gray-300 text-[13px] font-extralight flex justify-between items-center gap-5">
            <li
              onMouseEnter={() => fHover("Smth1")}
              className="hover:underline hover:scale-[1.05] transition-all "
              onClick={()=>{navigate("/pages")}}
            >
              Pages
            </li>
            <li
              onMouseEnter={() => fHover("smth2")}
              className="hover:underline hover:scale-[1.05] transition-all"
            >
              smth2
            </li>
            <li
              onMouseEnter={() => fHover("smth3")}
              className="hover:underline hover:scale-[1.05] transition-all"
            >
              smth3
            </li>
            <li
              onMouseEnter={() => fHover("smth4")}
              className="hover:underline hover:scale-[1.05] transition-all"
            >
              smth4
            </li>
            <li
              onMouseEnter={() => fHover("smth5")}
              className="hover:underline hover:scale-[1.05] transition-all"
            >
              smth5
            </li>
            <li
              onMouseEnter={() => fHover("smth6")}
              className="hover:underline hover:scale-[1.05] transition-all"
            >
              smth6
            </li>
            <li
              onMouseEnter={() => fHover("smth7")}
              className="hover:underline hover:scale-[1.05] transition-all"
            >
              smth7
            </li>
            <li
              onMouseEnter={() => fHover("smth8")}
              className="hover:underline hover:scale-[1.05] transition-all"
            >
              smth8
            </li>
            <li
              onMouseEnter={() => fHover("smth9")}
              className="hover:underline hover:scale-[1.05] transition-all"
            >
              smth9
            </li>
            <li
              onMouseEnter={() => fHover("smth10")}
              className="hover:underline hover:scale-[1.05] transition-all"
            >
              smth10
            </li>
          </ul>
          <svg
            onMouseEnter={() => {
              setIsHovered([false, isHovered[1]]);
              setIsHoveredS(true);
            }}
            className=" brightness-0 invert-[1]"
            xmlns="http://www.w3.org/2000/svg"
            width="15px"
            height="44px"
            viewBox="0 0 15 44"
          >
            <path d="M14.298,27.202l-3.87-3.87c0.701-0.929,1.122-2.081,1.122-3.332c0-3.06-2.489-5.55-5.55-5.55c-3.06,0-5.55,2.49-5.55,5.55 c0,3.061,2.49,5.55,5.55,5.55c1.251,0,2.403-0.421,3.332-1.122l3.87,3.87c0.151,0.151,0.35,0.228,0.548,0.228 s0.396-0.076,0.548-0.228C14.601,27.995,14.601,27.505,14.298,27.202z M1.55,20c0-2.454,1.997-4.45,4.45-4.45 c2.454,0,4.45,1.997,4.45,4.45S8.454,24.45,6,24.45C3.546,24.45,1.55,22.454,1.55,20z"></path>
          </svg>
          <svg
            onMouseEnter={() => {
              setIsHovered([false, isHovered[1]]);
              setIsHoveredS(false);
            }}
            className=" brightness-0 invert-[1]"
            height="44"
            viewBox="0 0 14 44"
            width="14"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m11.3535 16.0283h-1.0205a3.4229 3.4229 0 0 0 -3.333-2.9648 3.4229 3.4229 0 0 0 -3.333 2.9648h-1.02a2.1184 2.1184 0 0 0 -2.117 2.1162v7.7155a2.1186 2.1186 0 0 0 2.1162 2.1167h8.707a2.1186 2.1186 0 0 0 2.1168-2.1167v-7.7155a2.1184 2.1184 0 0 0 -2.1165-2.1162zm-4.3535-1.8652a2.3169 2.3169 0 0 1 2.2222 1.8652h-4.4444a2.3169 2.3169 0 0 1 2.2222-1.8652zm5.37 11.6969a1.0182 1.0182 0 0 1 -1.0166 1.0171h-8.7069a1.0182 1.0182 0 0 1 -1.0165-1.0171v-7.7155a1.0178 1.0178 0 0 1 1.0166-1.0166h8.707a1.0178 1.0178 0 0 1 1.0164 1.0166z"></path>
          </svg>
        </div>

        <>
          <div className={`w-full m-auto ${isHovered[0] ? "nav1" : ""} nav2`}>
            <Undereheader params={isHovered} />
          </div>
        </>
        <>
          <div className={`w-full m-auto ${isHoveredS ? "nav1" : ""} nav2`}>
            <Undereheader_s />
          </div>
        </>
      </div>
      {isHovered[0] || isHoveredS ? (
        <div className="cover left-0 z-1 fixed w-screen h-screen"></div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Header;
