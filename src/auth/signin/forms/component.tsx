import { Button, ButtonText } from "@/src/components/ui/button";
import { CustomTextfield } from "@/src/components/ui/custom/textfield";
import { FormControl } from "@/src/components/ui/form-control";
import { EyeIcon, EyeOffIcon, Icon } from "@/src/components/ui/icon";
import { useLang } from "@/src/config/lang/hooks/use_lang";
import { LanguageTranslationsKey } from "@/src/config/lang/translations/translations_keys";
import { useState } from "react";
import { Pressable } from "react-native";

export function SignInFormComponent() {
  const { i18n } = useLang();

  const [showPasswordState, setShowPasswordState] = useState(false);

  return (
    <FormControl className="flex gap-5">
      <CustomTextfield
        label={i18n.t(LanguageTranslationsKey.auth.email)}
        placeholder={i18n.t(LanguageTranslationsKey.auth.emailPlaceholder)}
        type="text"
        className="rounded-xl h-14"
      />
      <CustomTextfield
        label={i18n.t(LanguageTranslationsKey.auth.password)}
        placeholder={i18n.t(LanguageTranslationsKey.auth.passwordPlaceholder)}
        type={showPasswordState ? "text" : "password"}
        className="rounded-xl h-14"
        endContent={
          <Pressable onPress={() => setShowPasswordState(!showPasswordState)}>
            <Icon as={showPasswordState ? EyeIcon : EyeOffIcon} />
          </Pressable>
        }
      />
      <Button className="h-14 rounded-xl mt-3">
        <ButtonText>{i18n.t(LanguageTranslationsKey.auth.signIn)}</ButtonText>
      </Button>
    </FormControl>
  );
}
