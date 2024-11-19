import React, { useState, useEffect } from "react";
import { Stack } from "expo-router";
import { View } from "react-native";
import CustomNavbar from "../components/CustomNavbar";
import SplashScreen from "../components/SplashScreen";

export default function Layout() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#212121" }}>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: "#212121" },
        }}
      />
      <CustomNavbar />
    </View>
  );
}