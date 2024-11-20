import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { Home, Info } from "lucide-react-native";

export default function CustomNavbar() {
  const router = useRouter();

  return (
    <View style={styles.navbar}>
      <TouchableOpacity onPress={() => router.push('/')}>
        <Home color="black" size={30} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push('/info')}>
        <Info color="black" size={30} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 60,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  navbarName: {
    color: "black",
  },
});