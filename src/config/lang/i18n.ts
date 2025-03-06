import { I18n } from "i18n-js";
import enTranslation from "@/src/config/lang/translations/en.json";
import esTranslation from "@/src/config/lang/translations/es.json";
import { LanguageHelpers } from "./helpers";

const i18n = new I18n({
  en: enTranslation,
  es: esTranslation,
});

i18n.locale = LanguageHelpers.getLanguageForAppByLocation();

export default i18n;
