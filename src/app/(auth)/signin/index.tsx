import { SignInFormComponent } from "@/src/auth/signin/forms/component";
import { Button, ButtonText } from "@/src/components/ui/button";
import { useLang } from "@/src/config/lang/hooks/use_lang";
import { LanguageTranslationsKey } from "@/src/config/lang/translations/translations_keys";
import { router } from "expo-router";
import { View } from "react-native";

export default function AuthSignInPage() {
  const { i18n } = useLang();

  return (
    <View>
      <SignInFormComponent />
      <View>
        <Button
          variant="link"
          className="text-black"
          onPress={() => router.replace("/(auth)/signup")}
        >
          <ButtonText>
            {i18n.t(LanguageTranslationsKey.auth.signUpLinkMessage)}
          </ButtonText>
        </Button>
      </View>
    </View>
  );
}
