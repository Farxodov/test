import { createBrowserRouter, Link, Navigate } from "react-router-dom";
import Home from "../Home/Home";
import Charts from "../Home/Charts/Charts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: (
      <div className="w-screen h-screen bg-[#797979] flex flex-col text-white justify-center items-center">
        <h1 className="text-5xl cursor-default">ERROR/ NOT FOUND</h1>
        <br />
        <Link className="text-4xl underline" to={{pathname:"/"}}>Home</Link>
      </div>
    ),
    children: [
      {
        path: "charts",
        element:<Charts/>
      },
    ],
  },
]);
