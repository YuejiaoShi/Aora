import { View, Text } from "react-native";
import React from "react";

interface InfoBoxProps {
  title: string;
  subtitle: string;
  containerStyles?: string;
  titleStyles?: string;
}
const InfoBox = ({
  title,
  subtitle,
  containerStyles,
  titleStyles,
}: InfoBoxProps) => {
  return (
    <View>
      <Text>InfoBox</Text>
    </View>
  );
};

export default InfoBox;
