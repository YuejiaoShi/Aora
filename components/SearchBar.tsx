import { icons } from "@/constants";
import { router, usePathname } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  Image,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";

interface CustomSearchBarProps {
  initialQuery?: string | string[];
}

const CustomSearchBar: React.FC<CustomSearchBarProps> = ({ initialQuery }) => {
  const pathName = usePathname();
  const [query, setQuery] = useState("");

  if (initialQuery !== undefined && Array.isArray(initialQuery)) {
    setQuery(initialQuery.join(" "));
  } else if (initialQuery !== undefined) {
    setQuery(initialQuery);
  }

  return (
    <View className="w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 focus:border-secondary flex flex-row items-center space-x-4">
      <TextInput
        className="mt-0.5 text-base text-white flex-1 font-pregular"
        value={query}
        placeholder="Search for a video topic..."
        placeholderTextColor="#CDCDE0"
        onChangeText={(e) => setQuery(e)}
      />
      <TouchableOpacity
        onPress={() => {
          if (!query) {
            return Alert.alert(
              "Missing Query",
              "Please enter input to search for a video"
            );
          } else if (pathName.startsWith("/search")) {
            router.setParams({ query });
          } else {
            router.push(`/search/${query}`);
          }
        }}
      >
        <Image source={icons.search} className="w-6 h-6" resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

export default CustomSearchBar;
