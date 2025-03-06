import { Text, View } from "react-native";

type Props = {
  title: string;
};

export function AuthPageHeaderComponent(props: Props) {
  return (
    <View className="m-auto">
      <Text className="font-semibold text-2xl">{props.title}</Text>
    </View>
  );
}
