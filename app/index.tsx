import { Link } from "expo-router";
import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-pblack">VidAura</Text>
      <StatusBar style="auto" />
      <Link href="/home" className="text-blue-800">
        Go to Home
      </Link>
    </View>
  );
}
