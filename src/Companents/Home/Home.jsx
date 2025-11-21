import Header from "./Header";
import Pages from "../Pages/Pages";
import { Navigate, Route, Router, Routes } from "react-router-dom";
function Home() {

  return (
    <div>
      <div className="max-w-[800px] m-auto">
        <Header />
        <br /> <br /> <br /> 
        {/* --------------- */}
        <div>
            <Routes>
              <Route path="/pages" element={<Navigate to="/pages/1" />} />
              <Route path="/pages/:id" element={<Pages/>} />
            </Routes>
        </div>
        {/* ------------------------- */}
      </div>
    </div>
  );
}

export default Home;
