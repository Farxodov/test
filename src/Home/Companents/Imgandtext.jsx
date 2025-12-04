// src/App.js or any other component

import React from "react";
import { Trans } from "react-i18next";
// If your image is in src/assets, you would import it like this:
// import myPicture from './assets/my-picture.png';

function Imgandtext() {
  return (
    <div className="bg-[#f5f1f1]  dark:bg-[#151527] w-full pb-10">
      <div className="max-w-[1500px] not-1md:flex-col h-full m-auto px-4  sm:px-8 flex justify-center gap-10 items-center">
        <img
          src="https://dollarkursi.uz/uploads/posts/2024-06/usd.webp" 
          alt="not found"
          className="w-[500px] not-1md:hidden my-5 rounded-[67%_33%_33%_67%/32%_28%_72%_68%]"
        />
        <div className="1md:w-[50%] h-fit not-1md:my-5 p-5 rounded-4xl bg-[#e5e5e5] dark:shadow-[1px_1px_15px_1px_#512ca1] shadow-[1px_1px_15px_1px_#757575] dark:bg-[#22223b] dark:text-white text-center flex flex-col gap-4 justify-center">
          <Trans
            i18nKey={"text_rate"}
            components={{
              a: <a className="block font-bold font-serif text-2xl"/>,
              b: <b className="block font-medium text-justify font-serif" />,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Imgandtext;
