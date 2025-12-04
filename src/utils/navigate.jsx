import { createBrowserRouter, Link } from "react-router-dom";
import Home from "../Home/Home";
import Register from "../registerAndLogIn/register";
import Login from "../registerAndLogIn/Login";
import Course from "../Home/Companents/Course";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,

     children: [
      {
        path: "course",
        element: <Course />,
      },
    ],

    errorElement: (
      <div className="w-screen h-screen bg-[#797979] flex flex-col text-white justify-center items-center">
        <h1 className="text-5xl cursor-default">ERROR/ NOT FOUND</h1>
        <br />
        <Link className="text-4xl underline" to={{ pathname: "/" }}>
          Home
        </Link>
      </div>
    )
  },
  {
    path:"register",
    element:<Register/>
  },
    {
    path:"login",
    element:<Login/>
  }
]);
