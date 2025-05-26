import { StyleSheet, View, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppNavigator from './pages/AppRoutes';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
      <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0B2545" />
      <View style={styles.content}>
        <AppNavigator />
      </View>
    </SafeAreaView>
      </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1
  }
});
