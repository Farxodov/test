import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./CSS/index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./i18n.js";

createRoot(document.getElementById("root")).render(
  <div>
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  </div>
);
