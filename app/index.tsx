import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { foodData } from '../data/categoryFood';

export default function HomeScreen() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const router = useRouter();

  const filteredData =
    selectedCategory === 'All'
      ? foodData
      : foodData.filter((item) => item.category === selectedCategory);

  const renderCategory = () => (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.categoryScrollContainer}
    >
      {['All', 'Pedas', 'Gurih', 'Manis', 'Asin', 'Unik'].map((category, index) => (
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
    </ScrollView>
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => router.push(`../detail/${item.id}`)}
    >
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
      <View style={styles.header}>
        <Image
          source={require('../assets/images/logo-kl.png')}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.smallTitle}>Kuliner</Text>
          <Text style={styles.title}>Lokal</Text>
        </View>
      </View>

      <Text style={styles.subHeaderText}>Kategori</Text>
      {renderCategory()}

      <ContentWrapper>
        <Text style={styles.subHeaderText}>
          {selectedCategory === 'All' ? 'Semua Kuliner' : `Kuliner ${selectedCategory}`}
        </Text>
        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
        />
      </ContentWrapper>
    </View>
  );
}

const ContentWrapper = ({ children }) => {
  return <View style={styles.contentWrapper}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF9F0',
    paddingHorizontal: 20,
    paddingBottom: 80,
    paddingTop: 15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 0,
    width: '100%',
  },
  image: {
    width: 80,
    height: 80,
    marginRight: -10,
    marginLeft: -25,
  },
  textContainer: {
    flexDirection: 'column',
  },
  smallTitle: {
    fontSize: 12,
    color: '#387A61',
    fontWeight: '500',
  },
  title: {
    fontSize: 26,
    color: '#387A61',
    fontWeight: 'bold',
    marginBottom: -2,
  },
  subHeaderText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#006d3c',
    marginBottom: 10,
  },
  categoryScrollContainer: {
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 0,
  },
  categoryCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    minWidth: 90,
    maxWidth: 90,
    height: 50,
  },
  categoryCardSelected: {
    backgroundColor: '#006d3c',
  },
  categoryText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#006d3c',
    textAlign: 'center',
  },
  categoryTextSelected: {
    color: '#FFFFFF',
  },
  contentWrapper: {
    backgroundColor: 'rgba(255, 255, 255, 0)', 
    borderRadius: 12,
    padding: 0,
    elevation: 2,
    height: '78%',
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
