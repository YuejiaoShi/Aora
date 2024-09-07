import { Link } from "expo-router";
import { Text, View } from "react-native";
export default function HomeScreen() {
  return (
    <View className="bg-red-300">
      <Text>VidAuraffff</Text>
      <Link href="/profile" style={{ color: "blue" }}>
        Go to Profile
      </Link>
    </View>
  );
}
