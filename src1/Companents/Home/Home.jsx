import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import Header from "./Header";
import Pages from "../Pages/Pages";

function Home() {


  
  return (
    <div>
        <Header/>
        <br /><br /> <br />
        <Outlet/>
    </div>
  );
}

export default Home;
