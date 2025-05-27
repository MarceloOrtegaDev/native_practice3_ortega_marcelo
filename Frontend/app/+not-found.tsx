import { Stack, useRouter } from 'expo-router';
import {Text, View, TouchableOpacity } from 'react-native';

export default function NotFoundScreen() {
  const router = useRouter();
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View className='flex-1 items-center justify-center gap-4 bg-gray-300'>
        <Text className='font-bold text-slate-800 text-3xl'>Parece que ingresaste a una vista inexistente</Text>
        <TouchableOpacity
          className='bg-blue-800 px-4 py-2 rounded-lg'
          onPress={() => router.push('/')}>
          <Text className='text-white text-lg'>Volver al inicio</Text>
        </TouchableOpacity>
          <Text className='text-slate-800 text-lg'>Vuelve al inicio o deslizate hacia donde deseas ir</Text>

      </View>
    </>
  );
}