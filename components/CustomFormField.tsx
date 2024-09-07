import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
import React, { useState } from "react";
interface CustomFormFieldProps {
  title: string;
  value: string;
  placeholder: string;
  handleChange: (text: string) => void;
  otherStyles?: string;
  keyboardType?: TextInputProps["keyboardType"];
}
const CustomFormField: React.FC<CustomFormFieldProps> = ({
  title,
  value,
  placeholder,
  handleChange,
  otherStyles,
  keyboardType = "default",
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>
      <View className="w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 focus:border-secondary flex flex-row items-center">
        <TextInput
          className="flex-1 text-white font-psemibold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChange}
          secureTextEntry={title === "Password" && !showPassword}
        ></TextInput>
      </View>
    </View>
  );
};

export default CustomFormField;

const styles = StyleSheet.create({});
