import FormControlLabel from "@mui/material/FormControlLabel";
import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import LanguageSelector from "./Languageselector";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";
import { Link } from "react-router-dom";
import { SidebarCompanent } from "./Sidebar/sidebar";
import SearchInput from "./Companents/Search";

function Header() {
  const localS = localStorage.getItem("theme");
  const { i18n } = useTranslation();
  const [theme, setTheme] = useState(localS || "dark");
  const [sidebar, setSidebar] = useState(false);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const themeChange = (event) => {
    setTheme(event);
  };

  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    "& .MuiSwitch-switchBase": {
      margin: 1,
      padding: 0,
      transform: "translateX(6px)",
      "&.Mui-checked": {
        color: "#fff",
        transform: "translateX(22px)",
        "& .MuiSwitch-thumb:before": {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            "#fff"
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor: "#aab4be",
          ...theme.applyStyles("dark", {
            backgroundColor: "#8796A5",
          }),
        },
      },
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: "#001e3c",
      width: 32,
      height: 32,
      "&::before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
      ...theme.applyStyles("dark", {
        backgroundColor: "#003892",
      }),
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      backgroundColor: "#aab4be",
      borderRadius: 20 / 2,
      ...theme.applyStyles("dark", {
        backgroundColor: "#8796A5",
      }),
    },
  }));

  function onMune() {
    setSidebar((prev) => !prev);
  }

  // ========================================

  return (
    <>
      <div className="header w-full sticky top-0 z-30 bg-[#e5e5e5] dark:bg-[#22223b] h-20">
        <div className="pr-5 max-w-[1500px] h-full flex justify-between m-auto">
          <Link to={"/"}>
            <img src="./logo.png" className="w-[150px] min-w-[150px]" alt="logo" />
          </Link>
          <ul className="flex font-serif text-xl *:hover:underline *:hover:text-gray-700 *:dark:hover:text-gray-300 *:cursor-pointer gap-5 items-center not-sm:hidden dark:text-white">
            <Link to={"/course"}>
              <Trans i18nKey="course" />
            </Link>
            <li>
              <Trans i18nKey="cards" />
            </li>
            <li>
              <Trans i18nKey={"credit"} />
            </li>
          </ul>
          <div className="flex items-center gap-2.5">
                   <SearchInput/>
            <div className="not-1md:hidden relative inline-block text-left">
              <LanguageSelector />
            </div>

            <div className="not-1md:hidden">
              <FormControlLabel
                onChange={(event) =>
                  themeChange(event.target.checked ? "light" : "dark")
                }
                checked={theme === "dark" ? false : true}
                control={<MaterialUISwitch sx={{ m: 1 }} />}
              />
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 dark:stroke-white"
              onClick={onMune}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>
      </div>
      <div
        className={`${
          sidebar ? "fixed" : "hidden"
        } top-0 left-0 w-full h-screen z-40 bg-white/20 backdrop-blur-md`}
      ></div>
      <SidebarCompanent
        isOpen={sidebar}
        toggle={onMune}
        theme={theme}
        toggleTheme={themeChange}
      />
    </>
  );
}

export default Header;
