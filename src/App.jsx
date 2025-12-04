import { Toaster } from "sonner";
import { router } from "./utils/navigate";
import { RouterProvider } from "react-router-dom";
import "./i18n";

function App() {
  return (
    <>
      <div className="m-auto">
        <Toaster
        position="top-right"
          toastOptions={{
            style: {
              fontSize: "18px",
              padding: "16px",
              minWidth: "200px",
              maxWidth: "500px,"
            },
            className: "my-large-toast",
          }}
          richColors
        />
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
