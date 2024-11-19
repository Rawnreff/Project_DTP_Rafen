import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { foodData, FoodType } from "../../data/food";

export default function FoodListScreen() {
  const router = useRouter();

  const renderFoodItem = ({ item }: { item: FoodType }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => router.push(`../food/${item.id}`)}>
      <Image source={item.image} style={styles.image} resizeMode="cover" />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.origin}>Weight: {item.weight}g</Text>
        <Text style={styles.origin}>Rating: {item.rating}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Food Nusantara</Text>
      <FlatList
        data={foodData}
        renderItem={renderFoodItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212121",
    paddingTop: 50,
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  listContainer: {
    paddingHorizontal: 20,
  },
  itemContainer: {
    flexDirection: "row",
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 10,
    marginBottom: 15,
    overflow: "hidden",
  },
  image: {
    width: 100,
    height: 100,
  },
  textContainer: {
    justifyContent: "center",
    marginLeft: 15,
    flex: 1,
  },
  name: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  origin: {
    color: "white",
    fontSize: 14,
  },
});
