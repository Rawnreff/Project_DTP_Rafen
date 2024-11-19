import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { foodData } from '../data/kategoriFood';

export default function HomeScreen() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter data makanan berdasarkan kategori yang dipilih
  const filteredData =
    selectedCategory === 'All'
      ? foodData
      : foodData.filter((item) => item.category === selectedCategory);

  const renderCategory = () => (
    <View style={styles.categoryContainer}>
      {['All', 'Padang', 'Italiano', 'Seafood'].map((category, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.categoryCard,
            selectedCategory === category && styles.categoryCardSelected,
          ]}
          onPress={() => setSelectedCategory(category)}
        >
          <Text
            style={[
              styles.categoryText,
              selectedCategory === category && styles.categoryTextSelected,
            ]}
          >
            {category}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <Image source={item.image} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{item.name}</Text>
        <Text style={styles.cardWeight}>Weight {item.weight} gr</Text>
        <Text style={styles.cardRating}>⭐ {item.rating}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Kuliner Lokal</Text>
      <Text style={styles.subHeaderText}>Kategori</Text>
      {renderCategory()}

      <Text style={styles.subHeaderText}>
        {selectedCategory === 'All' ? 'Semua Makanan' : `Kategori: ${selectedCategory}`}
      </Text>
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF9F0',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#006d3c',
  },
  subHeaderText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#006d3c',
    marginVertical: 15,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  categoryCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: '22%',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  categoryCardSelected: {
    backgroundColor: '#006d3c',
  },
  categoryText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#006d3c',
  },
  categoryTextSelected: {
    color: '#FFFFFF',
  },
  listContainer: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 15,
    elevation: 3,
  },
  cardImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 10,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
  cardWeight: {
    fontSize: 14,
    color: '#777777',
    marginTop: 4,
  },
  cardRating: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#006d3c',
    marginTop: 4,
  },
});
