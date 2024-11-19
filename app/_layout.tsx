import React, { useState, useEffect } from "react";
import { Stack } from "expo-router";
import { View } from "react-native";
import CustomNavbar from "../components/CustomNavbar";
import SplashScreen from "../components/SplashScreen"; // Pastikan file SplashScreen ada

export default function Layout() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Timer untuk menghilangkan SplashScreen
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); // 3000 ms = 3 detik

    return () => clearTimeout(timer); // Membersihkan timer jika komponen di-unmount
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