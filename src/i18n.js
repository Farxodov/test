import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    returnObjects: true,
    resources: {
      en: {
        translation:{
            greeting:"Hello , Welcome!",
            text :{
              text1:"Text (from the Latin textus - fabric; weaving, combination) .",
              text2:"is a human thought recorded on some material medium; in general, a coherent and complete sequence of symbols"
            },
            header:{
              first:"Cards",
              second:"",
              third:"",
              forth:"",
              fifth:"",
            }
        }
      },
      ru: {
        translation:{
            greeting:"zdra",
            text :{
              text1: "Текст (от лат. textus — ткань; сплетение, сочетание)",
              text2: "-- зафиксированная на каком-либо материальном носителе человеческая мысль; в общем плане связная и полная последовательность символов"
            },
             header:{
              first:"Карты"
            }
        }
      },
      uz: {
        translation:{
            greeting:"Salom, Xush kelibsiz!",
            text:{
              text1:"Matn (lotincha textus — gazlama; toʻquv, birikma) ",
              text2:"— qandaydir moddiy muhitda yozib olingan inson fikri; umuman olganda, belgilarning izchil va to'liq ketma-ketligi."
            },
             header:{
              first:"Kartalar"
            }
        }
      },
    },
  });
