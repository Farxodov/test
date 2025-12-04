import { useTranslation } from "react-i18next";

export default function LanguageSelector() {
  const { i18n } = useTranslation();

  const handleChange = (e) => {
    i18n.changeLanguage(e.target.value);
    localStorage.setItem("i18nextLng", e.target.value); // Save manually
  };

  

  return (
    <>
      <select
        value={i18n.language}
        onChange={handleChange}
        className="appearance-none bg-white dark:bg-gray-800 border border-gray-300 
        dark:border-gray-700 text-gray-900 dark:text-gray-200 text-sm 
        rounded-lg px-4 py-2 pr-8 cursor-pointer focus:outline-none w-full
        focus:ring-2 focus:ring-blue-500"
        >
        <option value="en"> English</option>
        <option value="uz"> Oʻzbekcha</option>
        <option value="ru"> Русский</option>
      </select>

      {/* Icon */}
      <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
        <svg
          className="w-4 h-4 text-gray-500 dark:text-gray-300"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
          >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 011.08 1.04l-4.25 4.65a.75.75 0 01-1.08 0l-4.25-4.65a.75.75 0 01.02-1.06z"
            />
        </svg>
      </div>
    
            </>
  );
}
