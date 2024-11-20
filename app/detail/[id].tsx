import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { foodData } from "../../data/categoryFood";

export default function FoodDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  const foodId = Number(id);
  const food = foodData.find((t) => t.id === foodId);

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
      <Image source={food.image} style={styles.image} resizeMode="contain" />
      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>Ingredients</Text>
        <Text style={styles.infoDescription}>{food.ingredients}</Text>
      </View>
      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>Description</Text>
        <Text style={styles.infoDescription}>{food.description}</Text>
      </View>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backButtonText}>Kembali ke Halaman Utama</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAF9F0",
    padding: 20,
  },
  image: {
    width: "100%",
    height: 260,
    borderRadius: 50,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#006d3c",
    textAlign: "left",
    marginBottom: 20,
    marginLeft: 5,
  },
  infoCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#006d3c",
    marginBottom: 10,
  },
  infoDescription: {
    fontSize: 16,
    color: "#333333",
  },
  backButton: {
    backgroundColor: "#006d3c",
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 20,
  },
  backButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});