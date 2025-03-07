import { Pressable, Text, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useLang } from "@/src/config/lang/hooks/use_lang";
import { LanguageTranslationsKey } from "@/src/config/lang/translations/translations_keys";
import { Divider } from "@/src/components/ui/divider";

export enum ProviderAuthOptions {
  SIGNIN = "signin",
  SIGNUP = "signup",
}

type Props = {
  providerFor: ProviderAuthOptions;
};

export function AuthProvidersComponent(props: Props) {
  const { i18n } = useLang();

  return (
    <View className="w-full">
      <View className="flex flex-row items-center w-full gap-2 px-4">
        <Divider className="flex-auto" />
        <View>
          <Text className="text-center">
            {i18n.t(
              props.providerFor === ProviderAuthOptions.SIGNIN
                ? LanguageTranslationsKey.auth.signInProviderMessage
                : LanguageTranslationsKey.auth.signUpProviderMessage
            )}
          </Text>
        </View>
        <Divider className="flex-auto" />
      </View>
      <View className="grid grid-cols-1 gap-4 mt-5">
        <Pressable
          className="p-4 rounded-xl border-[0.5px]"
          onPress={() => alert("aaa")}
        >
          <FontAwesome
            className="m-auto"
            name="google"
            size={24}
            color="black"
          />
        </Pressable>
      </View>
    </View>
  );
}
