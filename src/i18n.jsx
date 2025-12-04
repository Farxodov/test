import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./i18n/locale/eng.json";
import ru from "./i18n/locale/rus.json";
import uz from "./i18n/locale/uzb.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    supportedLngs: ["en", "uz", "ru"],
    interpolation: { escapeValue: false },

    resources: {
      en,
      uz,
      ru,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
