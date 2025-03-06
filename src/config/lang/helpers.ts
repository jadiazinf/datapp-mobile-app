import { getLocales } from "expo-localization";
import { AppLanguages } from "./types";

function getLanguageForAppByLocation() {
  const lang = getLocales()[0].languageCode;

  switch (lang) {
    case "es":
      return AppLanguages.ES;
    case "en":
      return AppLanguages.EN;
    default:
      return AppLanguages.EN;
  }
}

export const LanguageHelpers = {
  getLanguageForAppByLocation,
};
