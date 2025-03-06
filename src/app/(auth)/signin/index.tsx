import { AuthPageHeaderComponent } from "@/src/app/(auth)/components/page_header";
import { SignInFormComponent } from "@/src/auth/signin/forms/component";
import { useLang } from "@/src/config/lang/hooks/use_lang";
import { LanguageTranslationsKey } from "@/src/config/lang/translations/translations_keys";
import { View } from "react-native";
import { AuthPageFooterComponent } from "@/src/app/(auth)/components/page_footer";

export default function AuthSignInPage() {
  const { i18n } = useLang();

  return (
    <View>
      <AuthPageHeaderComponent
        title={i18n.t(LanguageTranslationsKey.auth.signIn)}
      />
      <SignInFormComponent />
      <AuthPageFooterComponent
        text={i18n.t(LanguageTranslationsKey.auth.signUpLinkMessage)}
        url="/(auth)/signup"
      />
    </View>
  );
}
