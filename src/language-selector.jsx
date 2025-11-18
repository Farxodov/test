import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", lang: "English" },
  { code: "ru", lang: "Russian" },
  { code: "uz", lang: "Uzbek" },
  { code: "undefined", lang: "Agar til kiritilmagan bo`lsa default (eng) xolatga qaytadi" },
];
// import { i18n } from 'i18next';

function language_selector() {

  const {i18n } = useTranslation()

  function changeLang(p) {
    i18n.changeLanguage(p)
  } 

  return <>
   <div>
    <h1 className="text-white">-----</h1>
     {
      languages.map((p)=>(
        <button className={`m-2 p-2 rounded ${p.code=== i18n.language ? "  border-2 bg-black text-white border-white" :"bg-white border-black text-black"}`} key={p.code} onClick={()=>changeLang(p.code)}>{p.lang}</button>
      ))
    }
   </div>
  </>;
}

export default language_selector;
