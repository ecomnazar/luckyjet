import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import trJSON from "./locales/tr.json";
import esJSON from "./locales/es.json";

i18n.use(initReactI18next).init({
  resources: {
    tr: { ...trJSON },
    es: { ...esJSON },
  }, // Where we're gonna put translations' files
  lng: "tr", // Set the initial language of the App
});
