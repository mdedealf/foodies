import { Text, View } from "react-native";
import "./globals.css";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-green-100">
      <Text className="text-xl font-bold text-red-100">
        Welcome to Nativewind!
      </Text>
    </View>
  );
}
