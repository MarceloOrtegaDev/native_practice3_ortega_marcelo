import { View, Text, StyleSheet, Animated, FlatList } from "react-native";
import { Link } from "expo-router";
import { useRef, useEffect } from "react";

export default function Presentacion() {
  const fadeAnim1 = useRef(new Animated.Value(0)).current;
  const fadeAnim2 = useRef(new Animated.Value(0)).current;
  const fadeAnim3 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.stagger(150, [
      Animated.timing(fadeAnim1, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim2, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim3, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
    ]).start();
  },[]);

  const features = [
    {
      id: '1',
      icon: "🚀",
      text: "Rápido y eficiente",
      animation: fadeAnim1,
    },
    {
      id: '2',
      icon: "🔒",
      text: "Seguro y confiable",
      animation: fadeAnim2,
    },
    {
      id: '3',
      icon: "✨",
      text: "Fácil de usar",
      animation: fadeAnim3,
    },
  ];

  const renderFeature = ({ item }) => (
    <Animated.View
      style={[
        styles.featureItem,
        {
          opacity: item.animation,
          transform: [
            {
              translateY: item.animation.interpolate({
                inputRange: [0, 1],
                outputRange: [20, 0],
              }),
            },
          ],
        },
      ]}
    >
      <View style={styles.iconContainer}>
        <Text style={styles.featureIcon}>{item.icon}</Text>
      </View>
      <Text style={styles.featureText}>{item.text}</Text>
    </Animated.View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Bienvenido a DataMark</Text>
          <Text style={styles.subtitle}>
            Tu aplicación favorita para aprender ciencia de datos
          </Text>
        </View>

        <FlatList
          data={features}
          keyExtractor={(item) => item.id}
          renderItem={renderFeature}
          style={styles.features}
          scrollEnabled={false}
        />

        <View style={styles.buttonContainer}>
          <Link href="/login" style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Comenzar</Text>
          </Link>
        </View>

        <Text style={styles.footerText}>Únete a miles de usuarios satisfechos</Text>
      </View>
    </View>
  );
}

// (mantén los estilos igual)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4c669f',
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  header: {
    alignItems: "center",
    marginBottom: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  subtitle: {
    fontSize: 16,
    color: "#e0e7ff",
    textAlign: "center",
    marginTop: 8,
    opacity: 0.9,
  },
  features: {
    width: "100%",
    marginBottom: 40,
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginVertical: 8,
    borderRadius: 16,
    borderColor: "rgba(255, 255, 255, 0.25)",
    borderWidth: 1,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.25)",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  featureIcon: {
    fontSize: 20,
  },
  featureText: {
    fontSize: 16,
    color: "#ffffff",
    fontWeight: "500",
    flex: 1,
  },
  buttonContainer: {
    marginBottom: 32,
    width: "100%",
    alignItems: "center",
  },
  loginButton: {
    backgroundColor: "#ffffff",
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 28,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  loginButtonText: {
    color: "#4c669f",
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
  footerText: {
    fontSize: 14,
    color: "#e0e7ff",
    textAlign: "center",
    opacity: 0.8,
    marginTop: 24,
  },
});
