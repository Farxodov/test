import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LanguageSelector from "../Languageselector";

const Icon = ({ children, className = "w-5 h-5", strokeWidth = "2" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {children}
  </svg>
);

const XIcon = (props) => (
  <Icon {...props}>
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </Icon>
);
const ChartCheckIcon = (props) => (
  <Icon {...props}>
    <path d="M21 21H6.2C5.07989 21 4.51984 21 4.09202 20.782C3.71569 20.5903 3.40973 20.2843 3.21799 19.908C3 19.4802 3 18.9201 3 17.8V3M7 15L12 9L16 13L21 7" />
  </Icon>
);
const HomeIcon = (props) => (
  <Icon {...props}>
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </Icon>
);
const UsersIcon = (props) => (
  <Icon {...props}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </Icon>
);
const SettingsIcon = (props) => (
  <Icon {...props}>
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.78 1.48a2 2 0 0 0 .73 2.73l.15.08a2 2 0 0 1 1 1.74v.44a2 2 0 0 0 2 2h-.18a2 2 0 0 0-1.73 1l-.25.43a2 2 0 0 0 0 2l.08.15a2 2 0 0 0 .73 2.73l1.48.78a2 2 0 0 0 2.73-.73l.15-.08a2 2 0 0 1 1.74-1v.44a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.78-1.48a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.44a2 2 0 0 0 2-2h.18a2 2 0 0 0 1.73-1l.25-.43a2 2 0 0 0 0-2l-.08-.15a2 2 0 0 0-.73-2.73l-1.48-.78a2 2 0 0 0-2.73.73l-.15.08a2 2 0 0 1-1.74 1V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </Icon>
);
const LogOutIcon = (props) => (
  <Icon {...props}>
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <polyline points="16 17 21 12 16 7" />
    <line x1="21" x2="9" y1="12" y2="12" />
  </Icon>
);
const SunIcon = (props) => (
  <Icon {...props}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="m4.93 4.93 1.41 1.41" />
    <path d="m17.66 17.66 1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="m6.34 17.66-1.41 1.41" />
    <path d="m19.07 4.93-1.41 1.41" />
  </Icon>
);
const MoonIcon = (props) => (
  <Icon {...props}>
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </Icon>
);

export const SidebarCompanent = ({ isOpen, toggle, theme, toggleTheme }) => {
  const navigate = useNavigate();
  const sidebarClasses = `
    fixed top-0 right-0 z-50 
    w-90 h-screen 
    bg-white dark:bg-gray-800 text-gray-900 dark:text-white 
    p-6 shadow-2xl 
    transform transition-colors duration-500 transition-transform ease-out 
    ${isOpen ? "translate-x-0" : "translate-x-full"}
  `;

  const navItems = [
    { name: "Home", icon: HomeIcon, href: "/" },
    { name: "Course", icon: ChartCheckIcon, href: "/course" },
    { name: "Settings", icon: SettingsIcon, href: "#" },
  ];

  return (
    <>
      <aside className={sidebarClasses} aria-label="Sidebar Menu">
        <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-4 mb-8">
          <h2 className="text-2xl font-extrabold text-indigo-600 dark:text-indigo-400">
            App Menu
          </h2>
          <button
            onClick={toggle}
            className="p-2 text-gray-500 hover:text-gray-800 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700 rounded-full transition duration-150 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-label="Close sidebar"
          >
            <XIcon className="w-6 h-6" />
          </button>
        </div>

        <nav className="space-y-2">
          {navItems.map((item) => (
            <Link
            key={item.name}
            to={item.href}
            className="flex items-center p-3 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-600/30 transition duration-150 group"
            onClick={toggle}
            >
              <item.icon className="w-5 h-5 mr-3 text-indigo-500 dark:text-indigo-300 group-hover:text-indigo-700 dark:group-hover:text-white" />
              <span className="font-medium">{item.name}</span>
            </Link>
          ))}

          <div className="pt-4 border-t border-gray-200 dark:border-gray-700 mt-4">
            <button
              onClick={() => toggleTheme(theme === "dark" ? "light" : "dark")}
              className="flex items-center p-3 rounded-lg w-full text-left transition duration-150 group 
                           hover:bg-indigo-100 dark:hover:bg-indigo-600/30"
              aria-label="Toggle dark mode"
            >
              {theme === "dark" ? (
                <SunIcon className="w-5 h-5 mr-3 text-yellow-500 dark:text-yellow-300 group-hover:text-white" />
              ) : (
                <MoonIcon className="w-5 h-5 mr-3 text-indigo-500 dark:text-indigo-300 group-hover:text-white" />
              )}
              <span className="font-medium">
                {theme === "dark"
                  ? "Switch to Light Mode"
                  : "Switch to Dark Mode"}
              </span>
            </button>
          </div>
          <div className="relative border-t pt-4 border-gray-200 dark:border-gray-700">
            <LanguageSelector />
          </div>

          <div className="pt-2 border-t border-gray-200 dark:border-gray-700 mt-4">
            <button
              className="flex w-full cursor-pointer items-center p-3 rounded-lg hover:bg-red-100 dark:hover:bg-red-600/30 transition duration-150 group"
              onClick={() => {
                localStorage.removeItem("mydata");
                navigate("/register");
              }}
            >
              <LogOutIcon className="w-5 h-5 mr-3 text-red-500 dark:text-red-300 group-hover:text-white" />
              <span className="font-medium">Log Out</span>
            </button>
          </div>
        </nav>
      </aside>
    </>
  );
};
