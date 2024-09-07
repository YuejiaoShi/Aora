import { Link } from "expo-router";
import { Text, View } from "react-native";
export default function HomeScreen() {
  return (
    <View className="flex items-center justify-center bg-red-200">
      <Text>VidAuraffff</Text>
      <Link href="/profile" className="text-xl">
        Go to Profile
      </Link>
    </View>
  );
}
