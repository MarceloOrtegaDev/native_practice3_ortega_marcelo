import React from 'react';
import { View, Text, StyleSheet, Platform, Image } from 'react-native';
import banner from '../../assets/images/banner.png'


export const Hero = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>DataMark</Text>
      </View>
      
      <View style={styles.content}>
        <Image 
          source={banner}
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={styles.description}>
          Descubre el poder de la visualización de datos, la ciencia de datos y el machine learning en un solo lugar. 
          Aprende a transformar información en insights valiosos con herramientas interactivas y explicaciones claras.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#134074',
    paddingTop: Platform.OS === 'web' ? 40 : 60,
    paddingBottom: 40,
  },
  header: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: Platform.OS === 'web' ? 300 : 300,
    height: Platform.OS === 'web' ? 300 : 250,
    borderRadius: 20,
    marginBottom: 30,
  },
  description: {
    fontSize: Platform.OS === 'web' ? 18 : 16,
    lineHeight: Platform.OS === 'web' ? 28 : 24,
    color: '#ffffff',
    textAlign: 'center',
    maxWidth: 600,
    opacity: 0.9,
  },
});