import React from 'react';
import { dataInfo } from '../utils/dataSciense';
import { Text, View, ScrollView, StyleSheet } from 'react-native';

export const Sciense = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {dataInfo.map((section, index) => (
        <View key={index} style={styles.section}>
          <Text style={styles.title}>{section.title}</Text>
          {section.description && (
            <Text style={styles.description}>{section.description}</Text>
          )}
          {section.items && section.items.map((item, i) => (
            <Text key={i} style={styles.item}>• {item}</Text>
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#1B263B',
  },
  section: {
    marginBottom: 50,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    padding: 16,
  },
  title: {
    fontWeight: 'bold',
    color: '#780000',
    fontSize: 20,
    marginBottom: 4,
  },
  description: {
    fontSize: 20,
    marginBottom: 4,
  },
  item: {
    fontSize: 18,
    marginLeft: 10,
    fontWeight: 'bold',
  },
});
