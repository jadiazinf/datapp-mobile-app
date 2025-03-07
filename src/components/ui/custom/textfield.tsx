import React from "react";
import { Text } from "react-native";
import { VStack } from "@/src/components/ui/vstack";
import { Input, InputField, InputSlot } from "@/src/components/ui/input";

type Props = {
  label?: string;
  placeholder?: string;
  type?: "text" | "password";
  className?: string;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  value?: string;
  onChangeText?: (text: string) => void;
  onBlur?: () => void;
  error?: string;
};

export function CustomTextfield(props: Props) {
  const {
    label,
    placeholder,
    type = "text",
    className = "",
    startContent,
    endContent,
    value,
    onChangeText,
    onBlur,
    error,
  } = props;

  const labelClassName = `text-sm font-medium ${
    error ? "text-red-500" : "text-gray-700"
  }`;
  const inputClassName = `border ${
    error ? "border-red-500" : "border-gray-300"
  } ${className}`;

  return (
    <VStack space="sm">
      {label && <Text className={labelClassName}>{label}</Text>}
      <Input className={inputClassName}>
        {startContent && <InputSlot className="pl-3">{startContent}</InputSlot>}
        <InputField
          type={type}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          onBlur={onBlur}
          className="flex-1"
        />
        {endContent && <InputSlot className="pr-3">{endContent}</InputSlot>}
      </Input>
      {error && <Text className="text-sm text-red-500">{error}</Text>}
    </VStack>
  );
}
