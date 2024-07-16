import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import trJSON from "./locales/tr.json";
import esJSON from "./locales/es.json";
import estwoJSON from "./locales/estwo.json";
import ptJSON from "./locales/pt.json";
import uzJSON from "./locales/uz.json";
import frJSON from "./locales/fr.json";
import enJSON from "./locales/en.json";
import azJSON from "./locales/az.json";
import kgJSON from "./locales/kg.json";
import enphpJSON from "./locales/enphp.json";

i18n.use(initReactI18next).init({
  resources: {
    tr: { ...trJSON },
    es: { ...esJSON },
    pt: { ...ptJSON },
    uz: { ...uzJSON },
    fr: { ...frJSON },
    en: { ...enJSON },
    az: { ...azJSON },
    kg: { ...kgJSON },
    estwo: { ...estwoJSON },
    enphp: { ...enphpJSON },
  }, // Where we're gonna put translations' files
  lng: "tr", // Set the initial language of the App
});
