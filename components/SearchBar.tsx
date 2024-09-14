import { icons } from "@/constants";
import { usePathname } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";

const SearchBar: React.FC = ({}) => {
  const pathName = usePathname();
  const [query, setQuery] = useState("");

  return (
    <View className="w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 focus:border-secondary flex flex-row items-center space-x-4">
      <TextInput
        className="mt-0.5 text-base text-white flex-1 font-pregular"
        value={query}
        placeholder="Search for a video topic..."
        placeholderTextColor="#CDCDE0"
        onChangeText={(e) => setQuery(e)}
      />
      <TouchableOpacity>
        <Image source={icons.search} className="w-6 h-6" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
