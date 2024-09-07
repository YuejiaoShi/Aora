import { Link } from "expo-router";
import { Text, View } from "react-native";
export default function HomeScreen() {
  return (
    <View className="flex items-center justify-center bg-yellow-500">
      <Text>VidAuraffff</Text>
      <Link href="/profile" className="text-yellow-800 text-xl">
        Go to Profile
      </Link>
    </View>
  );
}
