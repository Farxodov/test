import { useEffect } from "react";
import { router } from "./utils/navigate";
import { Outlet, RouterProvider } from "react-router-dom";
import axios from "axios";

function App() {
  // useEffect(() => {
  //   axios.post(
  //       "http://192.168.0.184:8080/api/accounts/postAccount",
  //       {
  //         accountHolderName: "Firdavs",
  //         balance: 111.1,
  //       } 
  //     )
  //     .then((p) => {
  //       console.log(p);
  //     })
  //     .catch((p) => {
  //       console.log(p);
  //     });
  // });

  return (
    <>
      <div className="m-auto">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
