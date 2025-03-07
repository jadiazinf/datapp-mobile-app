import { Text } from "react-native";
import { VStack } from "../vstack";
import { Input, InputField, InputSlot } from "../input";

type Props = {
  label?: string;
  placeholder?: string;
  type?: "text" | "password";
  className?: string;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
};

export function CustomTextfield(props: Props) {
  return (
    <VStack>
      {props.label && <Text>{props.label}</Text>}
      <Input className={`${props.className ?? ""}`}>
        {props.startContent && (
          <InputSlot className="pl-5">{props.startContent}</InputSlot>
        )}
        <InputField
          type={props.type ?? "text"}
          placeholder={props.placeholder}
        />
        {props.endContent && (
          <InputSlot className="pr-5">{props.endContent}</InputSlot>
        )}
      </Input>
    </VStack>
  );
}
