import { icons } from "@/constants";
import React from "react";
import {
  Image,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";

interface SearchBarProps {
  title?: string;
  value?: string;
  placeholder?: string;
  handleChange?: (text: string) => void;
  otherStyles?: string;
  keyboardType?: TextInputProps["keyboardType"];
}

const SearchBar: React.FC<SearchBarProps> = ({
  title,
  value,
  placeholder,
  handleChange,
  otherStyles,
  keyboardType = "default",
}) => {
  return (
    <View className="w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 focus:border-secondary flex flex-row items-center space-x-4">
      <TextInput
        className="mt-0.5 text-base text-white flex-1 font-pregular"
        value={value}
        placeholder={placeholder}
        placeholderTextColor="#7B7B8B"
        onChangeText={handleChange}
      />
      <TouchableOpacity>
        <Image source={icons.search} className="w-6 h-6" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
