import { Text, View, Image, StyleSheet, Platform } from 'react-native';
import machine from '../../assets/images/machine.png';
import datos from '../../assets/images/cienciaDeDatos.png';
import graficos from '../../assets/images/graficos.png';

export const Info = () => {
  const features = [
    {
      title: 'Visualización de datos',
      description: 'Transforma datos complejos en información clara y accionable. Guía completa de los gráficos más importantes y más utilizados para la visualización de datos.',
      image: graficos,
    },
    {
      title: 'Ciencia de Datos',
      description: 'Con esta guía aprenderás los comandos básicos y más esenciales para que puedas manipular datos a tu placer y así convertirte en todo un analista.',
      image: datos,
    },
    {
      title: 'Machine Learning',
      description: 'Qué mejor que complementar todo lo anterior con aprendizaje sobre machine learning, aprende a utilizar las herramientas para crear redes neuronales y automatizar tus tareas.',
      image: machine,
    }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>¿Qué encontrarás en DataMark?</Text>
      <Text style={styles.subheading}>
        Ayúdate a aprender, solo tú puedes hacerlo
      </Text>

      {features.map((feature, index) => (
        <View key={index} style={styles.featureCard}>
          <View style={styles.textContent}>
            <Text style={styles.featureTitle}>{feature.title}</Text>
            <Text style={styles.featureDescription}>{feature.description}</Text>
          </View>
          <Image 
            source={feature.image}
            style={styles.featureImage}
            resizeMode="cover"
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: Platform.OS === 'web' ? 80 : 60,
    backgroundColor: '#ffffff',
  },
  heading: {
    fontSize: Platform.OS === 'web' ? 32 : 28,
    fontWeight: 'bold',
    color: '#1a1a1a',
    textAlign: 'center',
    marginBottom: 12,
  },
  subheading: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 40,
  },
  featureCard: {
    flexDirection: Platform.OS === 'web' ? 'row' : 'column',
    backgroundColor: '#f8f9fa',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  textContent: {
    flex: Platform.OS === 'web' ? 2 : 1,
    padding: 24,
  },
  featureTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#134074',
    marginBottom: 12,
  },
  featureDescription: {
    fontSize: 16,
    lineHeight: 24,
    color: '#4a5568',
  },
  featureImage: {
    flex: Platform.OS === 'web' ? 1 : 1,
    height: Platform.OS === 'web' ? 300 : 200,
    width: Platform.OS === 'web' ? 10 : 200,
  },
});