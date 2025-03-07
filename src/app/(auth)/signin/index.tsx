import { AuthPageHeaderComponent } from "@/src/app/(auth)/_components/page_header";
import { SignInFormComponent } from "@/src/auth/signin/forms/component";
import { useLang } from "@/src/config/lang/hooks/use_lang";
import { LanguageTranslationsKey } from "@/src/config/lang/translations/translations_keys";
import { View } from "react-native";
import { AuthPageFooterComponent } from "@/src/app/(auth)/_components/page_footer";
import {
  AuthProvidersComponent,
  ProviderAuthOptions,
} from "@/src/auth/providers/component";
import { Button, ButtonText } from "@/src/components/ui/button";
import { LogoComponent } from "@/src/components/ui/logo/component";

export default function AuthSignInPage() {
  const { i18n } = useLang();

  return (
    <View className="h-full">
      <View className="my-10 flex justify-center items-center">
        <LogoComponent size="4xl" />
      </View>
      <AuthPageHeaderComponent
        title={i18n.t(LanguageTranslationsKey.auth.signIn)}
      />
      <SignInFormComponent />
      <Button variant="link" className="mt-3">
        <ButtonText>
          {i18n.t(LanguageTranslationsKey.auth.forgotPassword)}
        </ButtonText>
      </Button>
      <View className="mt-5">
        <AuthProvidersComponent providerFor={ProviderAuthOptions.SIGNIN} />
      </View>
      <AuthPageFooterComponent
        text={i18n.t(LanguageTranslationsKey.auth.signUpLinkMessage)}
        url="/(auth)/signup"
      />
    </View>
  );
}
