import { Outlet, Route, Router, Routes } from "react-router-dom";
import {  router } from "./utils/navigate";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Home from "./Companents/Home/Home";
import Pages from "./Companents/Pages/Pages";

function App() {
  return (
    <>
      <div className="max-w-[800px] m-auto">
        <RouterProvider router={router} />
      </div>
    </>
  );
}



export default App;
