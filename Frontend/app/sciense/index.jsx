import { Text, FlatList, StyleSheet, TouchableOpacity, View, Platform } from 'react-native';
import { dataInfo } from '../../utils/dataSciense';
import { useRouter } from 'expo-router';

export default function Science() {
  const router = useRouter();

  const renderSection = ({ item }) => (
    <TouchableOpacity 
      onPress={() => router.push(`/sciense/${item.id}`)}
      style={styles.section}
    >
      <Text style={styles.title}>{item.title}</Text>
      {item.description && (
        <Text style={styles.description}>{item.description}</Text>
      )}
      {item.items && (
        <View style={styles.itemsContainer}>
          {item.items.map((subItem, index) => (
            <Text key={index} style={styles.item}>
              • {typeof subItem === 'string' ? subItem : subItem.name}
            </Text>
          ))}
        </View>
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.wrapper}>
      <Text style={styles.pageTitle}>
        Selecciona sobre lo que quieres informarte
      </Text>
      <FlatList
        data={dataInfo}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderSection}
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#2B2D42',
  },
  pageTitle: {
    fontSize: Platform.OS === 'web' ? 28 : 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  container: {
    padding: 16,
    paddingBottom: Platform.OS === 'web' ? 80 : 120,
  },
  section: {
    marginBottom: 20,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    transform: [{ scale: 1 }],
  },
  title: {
    fontSize: Platform.OS === 'web' ? 24 : 22,
    fontWeight: 'bold',
    color: '#134074',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: '#4A5568',
    lineHeight: 24,
    marginBottom: 16,
  },
  itemsContainer: {
    marginTop: 8,
  },
  item: {
    fontSize: 16,
    color: '#2D3748',
    marginBottom: 8,
    marginLeft: 8,
    lineHeight: 24,
  },
});