import { Text, View, FlatList, TouchableOpacity, ScrollView} from 'react-native';
import { dataInfo } from '../../utils/dataSciense';
import { useRouter, useLocalSearchParams } from 'expo-router';

export default function Detail() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const item = dataInfo.find(d => d.id === Number(id));

  if (!item) {
    return <Text>Item no encontrado</Text>;
  }

  const renderSubItem = ({ item: subItem }) => {
    if (typeof subItem === 'string') {
      return <Text>• {subItem}</Text>;
    } else {
      return (
        <TouchableOpacity className='border-2 gap-2 mb-10 p-2 rounded' onPress={() => router.push(`/sciense/lenguaje/${subItem.name.toLowerCase()}`)}>
          <Text className='text-lg font-bold'>{subItem.name}</Text>
          <Text>{subItem.description}</Text>
        </TouchableOpacity>
      );
    }
  };

  return (
    <ScrollView className='flex-1 bg-gray-300 mb-4'>
    <View className='p-4 flex-1'>
      <Text className='text-2xl text-black font-bold mb-4'>{item.title}</Text>
      {item.description && <Text>{item.description}</Text>}

      {item.items && (
        <FlatList
        data={item.items}
        keyExtractor={(subItem, index) =>
          typeof subItem === 'string' ? subItem : subItem.name + index
        }
        renderItem={renderSubItem}
        />
      )}
    </View>
      </ScrollView>
  );
}


