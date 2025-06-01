import { Text, View, FlatList, TouchableOpacity, ScrollView, StyleSheet, Platform } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import {dataInfo} from '../../utils/dataSciense';

export default function Detail() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const item = dataInfo.find(d => d.id === Number(id));

  if (!item) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Item no encontrado</Text>
      </View>
    );
  }

  const renderSubItem = ({ item: subItem }) => {
    if (typeof subItem === 'string') {
      return (
        <View style={styles.bulletItem}>
          <Text style={styles.bulletText}>• {subItem}</Text>
        </View>
      );
    }
    
    return (
      <TouchableOpacity 
        style={styles.cardContainer}
        onPress={() => router.push(`/sciense/lenguaje/${subItem.name.toLowerCase()}`)}
      >
        <Text style={styles.cardTitle}>{subItem.name}</Text>
        <Text style={styles.cardDescription}>{subItem.description}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>{item.title}</Text>
          {item.description && (
            <Text style={styles.description}>{item.description}</Text>
          )}
        </View>

        {item.items && (
          <FlatList
            data={item.items}
            keyExtractor={(subItem, index) =>
              typeof subItem === 'string' ? subItem : subItem.name + index
            }
            renderItem={renderSubItem}
            scrollEnabled={false}
          />
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF4ED',
  },
  content: {
    padding: 20,
    paddingBottom: Platform.OS === 'web' ? 60 : 40,
  },
  header: {
    marginBottom: 24,
  },
  title: {
    fontSize: Platform.OS === 'web' ? 32 : 28,
    fontWeight: 'bold',
    color: '#134074',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: '#4A5568',
    lineHeight: 24,
  },
  bulletItem: {
    marginBottom: 12,
    paddingLeft: 8,
  },
  bulletText: {
    fontSize: 16,
    color: '#2D3748',
    lineHeight: 24,
  },
  cardContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: Platform.OS === 'web' ? 22 : 20,
    fontWeight: 'bold',
    color: '#134074',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 15,
    color: '#4A5568',
    lineHeight: 22,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EEF4ED',
    padding: 20,
  },
  errorText: {
    fontSize: 18,
    color: '#DC2626',
    textAlign: 'center',
  },
});