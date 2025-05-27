import { View, Text, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export default function Presentacion() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>SoyUnaPresentación</Text>
      <Link href="/login" style={{ marginTop: 20, color: 'blue' }}>
        Ir al login
      </Link>
    </View>
  );
}
