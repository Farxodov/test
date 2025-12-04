import { useEffect, useState } from "react";

function Underheader({ params }) {
  const [animate, setAnimate] = useState(true);

  const [number, setNumber] = useState();
  useEffect(() => {
    setNumber(localStorage.getItem("number"));
  });

  useEffect(() => {
    setAnimate(false);

    setTimeout(() => {
      setAnimate(true);
    }, 10);
  });

  return (
    <>
      <div
        className={`${
          animate ? "navbar1" : ""
        } max-w-[1440px] m-auto p-4`}
      >
        <h1 className="text-white text-2xl font-serif"> Explore {params[1]}</h1>
        <br />
        <hr className="text-white" />
        <br />
      </div>
    </>
  );
}

export default Underheader;
