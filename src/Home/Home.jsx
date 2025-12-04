import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import Header from "./Header";
import Test from "./Test";
// import { useGetCourseYear } from "../hooks/useGetTest";
function Home() {
  const [mydata, setMyData] = useState(undefined);
   const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const newdata = localStorage.getItem("mydata");
    setMyData(JSON.parse(newdata));
    if (!newdata) {
      navigate("register");
    }
  }, [location]);

  // const {data} = useGetCourseYear()

  // console.log(data, "100");
  

  // ========================================

  return (
    <>
      {mydata ? (
        <>
          <Header />
          <Test/>
          <Outlet/>
        </>
      ) : (
        ""
      )}

    </>
  );
}

export default Home;
