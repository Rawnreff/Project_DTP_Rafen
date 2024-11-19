import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

interface CategoryCardProps {
  name: string;
  icon: React.ReactNode;
}

export default function CategoryCard({ name, icon }: CategoryCardProps) {
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.iconContainer}>{icon}</View>
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 140,
    height: 180,
    backgroundColor: "#A5D6A7", // Hijau Pastel
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  iconContainer: {
    marginBottom: 10,
  },
  name: {
    color: "#004D40", // Hijau Tua
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
