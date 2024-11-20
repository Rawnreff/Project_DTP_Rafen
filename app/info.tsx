import React from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions, Image } from "react-native";

const { height } = Dimensions.get("window");

export default function InfoScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Image 
            source={require('../assets/images/logo-kl.png')} 
            style={styles.image}
          />
          <View style={styles.textContainer}>
            <Text style={styles.smallTitle}>Tentang</Text>
            <Text style={styles.title}>Kuliner Lokal</Text>
          </View>
       </View>

        <Text style={styles.description}>
          Kuliner Lokal adalah aplikasi mobile yang dirancang untuk memperkenalkan dan menjelajahi berbagai 
          makanan, minuman, dan budaya kuliner lokal yang kaya dan beragam. Kami percaya bahwa kuliner adalah bagian penting 
          dari identitas budaya, dan aplikasi ini bertujuan untuk membawa rasa lokal lebih dekat kepada Anda.
        </Text>
        <View style={styles.featureSection}>
          <Text style={styles.featureTitle}>Fitur Kami</Text>
          <Text style={styles.featureItem}>🍕 Jelajahi berbagai kategori hidangan lokal.</Text>
          <Text style={styles.featureItem}>⭐ Terdapat rating makanan.</Text>
          <Text style={styles.featureItem}>🔍 Filter kuliner sesuai keinginan anda.</Text>
          <Text style={styles.featureItem}>📖 Informasi bahan dan deskripsi kuliner.</Text>
        </View>
        <Text style={styles.footer}>
          Terima kasih telah menggunakan aplikasi Kuliner Lokal. Bersama-sama, mari kita lestarikan dan nikmati kekayaan rasa kuliner Nusantara!
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAF9F0",
  },
  scrollContent: {
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 0,
    width: "100%",
    marginLeft: -10,
  },
  image: {
    width: 80,
    height: 80,
    marginRight: -10,
  },
  textContainer: {
    flexDirection: "column",
  },
  smallTitle: {
    fontSize: 16,
    color: "#387A61",
    fontWeight: "500",
  },
  title: {
    fontSize: 20,
    color: "#387A61",
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    color: "#004D40",
    textAlign: "justify",
    marginBottom: 30,
    lineHeight: 24,
    padding: 15,
  },
  featureSection: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 20,
    marginBottom: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  featureTitle: {
    fontSize: 20,
    color: "#387A61",
    fontWeight: "bold",
    marginBottom: 10,
  },
  featureItem: {
    fontSize: 16,
    color: "#387A61",
    marginBottom: 5,
    lineHeight: 22,
  },
  footer: {
    fontSize: 14,
    color: "#004D40",
    textAlign: "center",
    fontStyle: "italic",
    marginTop: 20,
    marginBottom: 80,
  },
});