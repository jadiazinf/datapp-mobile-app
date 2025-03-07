import { Text, View } from "react-native";

type Props = {
  title: string;
};

export function AuthPageHeaderComponent(props: Props) {
  return (
    <View className="my-10">
      <Text className="font-bold text-4xl">{props.title}</Text>
    </View>
  );
}
