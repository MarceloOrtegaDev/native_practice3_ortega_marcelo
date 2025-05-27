import { dataInfo } from '../../utils/dataSciense';
import { Text, View, FlatList, StyleSheet } from 'react-native';

export default function Sciense () {
  const renderSection = ({ item }) => (
    <View style={styles.section}>
      <Text style={styles.title}>{item.title}</Text>
      {item.description && (
        <Text style={styles.description}>{item.description}</Text>
      )}
      {item.items && item.items.map((subItem, index) => (
        <Text key={index} style={styles.item}>• {subItem}</Text>
      ))}
    </View>
  );

  return (
    <FlatList
      data={dataInfo}
      keyExtractor={(_, index) => index.toString()}
      renderItem={renderSection}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#1B263B',
    paddingBottom: 56,
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
