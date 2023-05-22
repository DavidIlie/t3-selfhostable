import React from "react";
import { Button, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack, useRouter } from "expo-router";

const Index = () => {
  const router = useRouter();
  return (
    <SafeAreaView className="bg-[#1F104A]">
      <Stack.Screen options={{ title: "Route" }} />
      <View className="h-full w-full p-4">
        <Button
          onPress={() => void router.push("/")}
          title="Route test"
          color={"#f472b6"}
        />
      </View>
    </SafeAreaView>
  );
};

export default Index;
