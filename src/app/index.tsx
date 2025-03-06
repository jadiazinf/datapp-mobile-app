import { Button, Text } from "react-native";
import { VStack } from "@/src/components/ui/vstack";
import { useLang } from "../config/lang/hooks/use_lang";
import { AppLanguages } from "../config/lang/types";
import { LanguageTranslationsKey } from "../config/lang/translations/translations_keys";

export default function Index() {
  const { i18n, setLanguage } = useLang();

  return (
    <VStack>
      <Text className="font-bold">{i18n.t("hello")}</Text>
      <Button
        title={i18n.t(LanguageTranslationsKey.appLanguages.es)}
        onPress={() => setLanguage(AppLanguages.ES)}
      />
      <Button
        title={i18n.t(LanguageTranslationsKey.appLanguages.en)}
        onPress={() => setLanguage(AppLanguages.EN)}
      />
    </VStack>
  );
}
