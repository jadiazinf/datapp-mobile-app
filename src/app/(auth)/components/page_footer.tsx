import { Button, ButtonText } from "@/src/components/ui/button";
import { Href, router } from "expo-router";
import { View } from "react-native";

type Props = {
  text: string;
  url: Href;
};

export function AuthPageFooterComponent(props: Props) {
  return (
    <View className="m-auto">
      <Button variant="link" onPress={() => router.replace(props.url)}>
        <ButtonText>{props.text}</ButtonText>
      </Button>
    </View>
  );
}
