import { View, Text, Image } from "react-native";
import React from "react";
import { images } from "@/constants";

interface EmptyStateProps {
  title: string;
  subtitle: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({ title, subtitle }) => {
  return (
    <View className="text-white justify-center items-center px-4">
      <Image source={images.empty} className="w-64 h-64" resizeMode="contain" />
      <Text className="text-2xl font-psemibold text-white">{title}</Text>
      <Text className="font-pmedium mt-2 text-sm text-gray-100">
        {subtitle}
      </Text>
    </View>
  );
};

export default EmptyState;
