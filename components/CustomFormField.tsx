import { StyleSheet, Text, TextInputProps, View } from "react-native";
import React from "react";
interface CustomFormFieldProps {
  title: string;
  value: string;
  handleChange: (text: string) => void;
  otherStyles?: string;
  keyboardType?: TextInputProps["keyboardType"];
}
const CustomFormField: React.FC<CustomFormFieldProps> = ({
  title,
  value,
  handleChange,
  otherStyles,
  keyboardType = "default",
}) => {
  return (
    <View className="space-y-2">
      <Text className="text-base text-gray-100 font-pmedium">
        CustomFormField
      </Text>
    </View>
  );
};

export default CustomFormField;

const styles = StyleSheet.create({});
