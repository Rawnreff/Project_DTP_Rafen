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

      setTimeout(() => {
        navigation.navigate('/' as never);
      }, 1500);
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
    backgroundColor: '#E2FFF0',
  },
  logo: {
    width: 300,
    height: 300,
    marginBottom: -50,
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#387A61',
  },
});

export default SplashScreen;