import { SignUpFormComponent } from "@/src/auth/signup/forms/component";
import { useLang } from "@/src/config/lang/hooks/use_lang";
import { LanguageTranslationsKey } from "@/src/config/lang/translations/translations_keys";
import { View } from "react-native";
import { AuthPageHeaderComponent } from "@/src/app/(auth)/_components/page_header";
import { AuthPageFooterComponent } from "@/src/app/(auth)/_components/page_footer";
import {
  AuthProvidersComponent,
  ProviderAuthOptions,
} from "@/src/auth/providers/component";
import { LogoComponent } from "@/src/components/ui/logo/component";

export default function AuthSignUpPage() {
  const { i18n } = useLang();

  return (
    <View className="h-full">
      <View className="my-10 flex justify-center items-center">
        <LogoComponent size="4xl" />
      </View>
      <AuthPageHeaderComponent
        title={i18n.t(LanguageTranslationsKey.auth.signUp)}
      />
      <SignUpFormComponent />
      <View className="mt-5">
        <AuthProvidersComponent providerFor={ProviderAuthOptions.SIGNUP} />
      </View>
      <AuthPageFooterComponent
        text={i18n.t(LanguageTranslationsKey.auth.signInLinkMessage)}
        url="/(auth)/signin"
      />
    </View>
  );
}
