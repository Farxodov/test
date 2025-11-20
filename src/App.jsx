import { Route, Routes } from "react-router-dom";
import Home from "./Companents/Home/Home";
import i18next from "i18next";

function App() {
  i18next.init({
    logger: {
      log: () => {},
      warn: () => {},
      error: () => {},
    },
  });
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
