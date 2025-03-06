import { AppLanguages } from "@/src/config/lang/types";
import i18n from "@/src/config/lang/i18n";
import { RootState, useAppDispatch } from "@/src/store/store";
import { useSelector } from "react-redux";
import { setAppLanguage } from "@/src/config/lang/redux/slices";

export const useLang = () => {
  const dispatch = useAppDispatch();

  const { language } = useSelector((state: RootState) => state.lang);

  function setLanguage(lang: AppLanguages) {
    i18n.locale = lang;
    dispatch(setAppLanguage(lang));
  }

  return {
    i18n,
    appLanguage: language,
    setLanguage,
  };
};
