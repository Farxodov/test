import { createBrowserRouter, Navigate } from "react-router-dom";
import Pages from "../Companents/Pages/Pages";
import Home from "../Companents/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: (
      <>
        <h1 className="text-white text-9xl">ERROR NOT FOUND</h1>
      </>
    ),
    children: [
      {
        path: "pages",
        children: [
          {
            index:true,
            element: <Navigate to="1" replace/>
          },
          {
            path: ":id",
            element: <Pages />,
          },
        ],
      },
    ],
  },
]);
