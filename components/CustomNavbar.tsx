import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { Home, Info } from "lucide-react-native";

export default function CustomNavbar() {
  const router = useRouter();

  return (
    <View style={styles.navbar}>
      <TouchableOpacity onPress={() => router.push('/')}>
        <Home color="white" size={30} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push('/info')}>
        <Info color="white" size={30} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 70,
    backgroundColor: 'rgba(0, 109, 60, 0.9)',
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 20,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,

  },
});