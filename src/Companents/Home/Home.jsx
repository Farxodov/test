import Header from "./Header";
import { useTranslation } from "react-i18next";
import Language_selector from "./../../language-selector";
import Pages from "../Pages/Pages";
import Page1 from "../Pages/Page1";
function Home() {
  const { t } = useTranslation();
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
  return (
    <div>
      <div className="max-w-[800px] m-auto">
        <Header />
        <br /> <br /> <br /> 
        {/* --------------- */}
        <div>
          <Pages/>
        </div>
        {/* ------------------------- */}
      </div>

      {/* 
      <h1 className="text-white">{t("greeting")}</h1>
    
      <p className="text-white">{t("text").text1}</p>
    
      <p className="text-white">{t("text").text2}</p>
    
      <Language_selector/> */}
    </div>
  );
}

export default Home;
