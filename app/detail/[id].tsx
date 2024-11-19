import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { foodData } from "../../data/categoryFood";

export default function FoodDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  const foodId = Number(id);

  console.log("Received ID:", foodId);
  console.log("All food Data:", foodData);

  const food = foodData.find((t) => t.id === foodId);

  console.log("Found food:", food);

  if (!food) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Food Tidak Ditemukan</Text>
        <Text style={styles.description}>ID yang dicari: {foodId}</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{food.name}</Text>
      <Image source={food.image} style={styles.image} resizeMode="cover" />
      <View style={styles.container}>
        <Text style={styles.description}>{food.ingredients}</Text>
        <Text style={styles.description}>{food.description}</Text>
      </View>

      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backButtonText}>Kembali</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E2FFF0",
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    color: "black",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  origin: {
    color: "black",
    fontSize: 16,
    marginBottom: 15,
  },
  description: {
    color: "black",
    fontSize: 14,
    lineHeight: 22,
  },
  backButton: {
    backgroundColor: "#376E46",
    padding: 15,
    marginTop: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  backButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});