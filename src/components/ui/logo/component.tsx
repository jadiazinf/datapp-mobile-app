import { Text } from "react-native";

type Props = {
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
};

export function LogoComponent(props: Props) {
  return (
    <Text className={`font-extrabold text-${props.size ?? "xl"}`}>Datapp</Text>
  );
}
