import { SignUpFormComponent } from "@/src/auth/signup/forms/component";
import { Button, ButtonText } from "@/src/components/ui/button";
import { useLang } from "@/src/config/lang/hooks/use_lang";
import { LanguageTranslationsKey } from "@/src/config/lang/translations/translations_keys";
import { router } from "expo-router";
import { View } from "react-native";

export default function AuthSignUpPage() {
  const { i18n } = useLang();

  return (
    <View>
      <SignUpFormComponent />
      <View>
        <Button variant="link" onPress={() => router.replace("/(auth)/signin")}>
          <ButtonText>
            {i18n.t(LanguageTranslationsKey.auth.signInLinkMessage)}
          </ButtonText>
        </Button>
      </View>
    </View>
  );
}
