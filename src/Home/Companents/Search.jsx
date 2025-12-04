import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

const SearchInput = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const inputRef = useRef(null);
  const handleIconClick = () => {
    if (!isOpen) {
      inputRef.current.focus();
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  function handleBlur() {
    setIsOpen(false);
  }

  document.addEventListener("click", function (event) {
    const clickedInside = event.target.closest("#target-div");
    if (!clickedInside) {
      setIsOpen(false)
    }
  });

  const inputClasses = `
    w-10 
    h-10 
    p-2 
    pr-8
    rounded 
    bg-gray-100 
    dark:bg-gray-700 
    dark:text-white 
    text-gray-900 
    border-2 
    border-transparent 
    transition-all 
    duration-300 
    ease-in-out 
    absolute
    right-0
    top-0
    transform 
    origin-right
    z-0
    focus:outline-none 
    
    ${
      isOpen
        ? "1md:w-50 min-[1180px]:w-64 b800:w-55  1sm:w-40  w-42 pl-2 opacity-100 border-blue-500 placeholder-gray-400 dark:placeholder-gray-300"
        : "opacity-0 placeholder-transparent border-transparent"
    }
  `;

  const buttonClasses = `
    absolute 
    right-0 
    top-0 
    w-10 
    h-10 
    flex 
    items-center 
    justify-center 
    rounded-full 
    text-gray-500 
    dark:text-gray-300 
    hover:text-blue-500 
    dark:hover:text-blue-400 
    transition-colors 
    duration-300 
    z-10
    cursor-pointer
    ${isOpen ? "" : ""}
  `;

  return (
    <>
      <div id="target-div" className={`relative h-10 ${isOpen ? "max-[1180px]:ml-30" : ""}`}>
        <input
          ref={inputRef}
          type="text"
          placeholder={t("search") + "..."}
          className={inputClasses}
        />
        {/* <h1 className="min-[1200px]:text-blue-500 1md:text-red-400">aaa</h1> */}
        <button
          onClick={handleIconClick}
          aria-label="Search"
          className={buttonClasses}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </button>
      </div>
    </>
  );
};

export default SearchInput;
