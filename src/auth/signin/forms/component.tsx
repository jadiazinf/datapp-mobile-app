import { Button, ButtonText } from "@/src/components/ui/button";
import { CustomTextfield } from "@/src/components/ui/custom/textfield";
import { FormControl } from "@/src/components/ui/form-control";
import { EyeIcon, EyeOffIcon, Icon } from "@/src/components/ui/icon";
import { useLang } from "@/src/config/lang/hooks/use_lang";
import { LanguageTranslationsKey } from "@/src/config/lang/translations/translations_keys";
import { useState } from "react";
import { Pressable } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormSchema } from "@/src/auth/signin/forms/validations";
import { SignInFormProps } from "@/src/auth/signin/forms/types";

export function SignInFormComponent() {
  const { i18n } = useLang();

  const [showPasswordState, setShowPasswordState] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(LoginFormSchema) });

  function onSubmit(value: SignInFormProps) {
    alert(JSON.stringify(value));
  }

  return (
    <FormControl className="flex gap-5">
      <Controller
        control={control}
        name="email"
        defaultValue=""
        render={({ field: { onChange, onBlur, value } }) => (
          <CustomTextfield
            label={i18n.t(LanguageTranslationsKey.auth.email)}
            placeholder={i18n.t(LanguageTranslationsKey.auth.emailPlaceholder)}
            type="text"
            className="rounded-xl h-14"
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            error={errors.email?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        defaultValue=""
        render={({ field: { onChange, onBlur, value } }) => (
          <CustomTextfield
            label={i18n.t(LanguageTranslationsKey.auth.password)}
            placeholder={i18n.t(
              LanguageTranslationsKey.auth.passwordPlaceholder
            )}
            type={showPasswordState ? "text" : "password"}
            className="rounded-xl h-14"
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            error={errors.password?.message}
            endContent={
              <Pressable
                onPress={() => setShowPasswordState(!showPasswordState)}
              >
                <Icon as={showPasswordState ? EyeIcon : EyeOffIcon} />
              </Pressable>
            }
          />
        )}
      />
      <Button className="h-14 rounded-xl mt-3" onPress={handleSubmit(onSubmit)}>
        <ButtonText>{i18n.t(LanguageTranslationsKey.auth.signIn)}</ButtonText>
      </Button>
    </FormControl>
  );
}
