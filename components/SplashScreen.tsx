import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();
  
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 1500,
        useNativeDriver: true,
      }).start();

    }, 1500);
  }, [fadeAnim, navigation]);

  return (
    <View style={styles.container}>
      <Animated.Image 
        source={require('../assets/images/logo-kl.png')} 
        style={[styles.logo, { opacity: fadeAnim }]} 
      />
      <Animated.Text style={[styles.text, { opacity: fadeAnim }]}>
        Kuliner Lokal
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EAF9F0',
  },
  logo: {
    width: 250,
    height: 250,
    marginBottom: -40,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#387A61',
  },
});

export default SplashScreen;