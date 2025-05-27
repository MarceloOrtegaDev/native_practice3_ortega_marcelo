import { View, Text, Image, ScrollView } from 'react-native';
import { dataInfo } from '../../../utils/dataSciense'; // Ajusta la ruta según tu estructura
import { useLocalSearchParams } from 'expo-router';

export default function LanguageDetail() {
  const { name } = useLocalSearchParams();
  
  const languagesSection = dataInfo.find(d => d.id === 2);
  const language = languagesSection?.items.find(
    (lang) => lang.name.toLowerCase() === name.toLowerCase()
  );

  if (!language) {
    return <Text>Lenguaje no encontrado</Text>;
  }

  return (
    <ScrollView className="flex-1 bg-gray-800">
    <View className="items-center p-14 mb-10">
      <Text className="text-white font-bold text-2xl">{language.name}</Text>
      <Text className="text-xl font-bold text-gray-200 mt-2">{language.description}</Text>
      <Image source={language.image} className="mt-10 h-96 w-96 mb-2 rounded-md"/>
      <Text className="text-white text-lg text-center">{language.infoExtra}</Text>
    </View>
    </ScrollView>
  );
}

