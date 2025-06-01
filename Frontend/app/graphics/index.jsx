import { Text, View, Image, StyleSheet, FlatList, Platform } from 'react-native';
import { graficos } from '../../utils/graficos';

export default function Graphics() {
  const renderItem = ({ item }) => (
    <View style={styles.cardContainer}>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <View style={styles.cardContent}>
        <Text style={styles.cardDescription}>{item.description}</Text>
        <Image source={{ uri: item.image }} style={styles.cardImage} />
      </View>
    </View>
  );

  return (
    <FlatList
      ListHeaderComponent={
        <Text style={styles.title}>
          Gráficos a tener en cuenta al trabajar con visualización de datos
        </Text>
      }
      data={graficos}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    paddingBottom: Platform.OS === 'web' ? 60 : 40,
    backgroundColor: '#2B2D42',
  },
  title: {
    fontSize: Platform.OS === 'web' ? 26 : 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  cardContainer: {
    backgroundColor: '#EDF2F4',
    borderRadius: 16,
    padding: 16,
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
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  cardDescription: {
    flex: 1,
    fontSize: 15,
    color: '#4A5568',
    lineHeight: 22,
  },
  cardImage: {
    height: 90,
    width: 150,
    borderRadius: 12,
  },
});
