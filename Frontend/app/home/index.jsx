import { View, ScrollView } from 'react-native'
import { Hero } from '../../components/HomeComponents/Hero'
import { Info } from '../../components/HomeComponents/Info'

export default function Home () {
  return (
    <View style={{ flex: 1, backgroundColor: "#EEF4ED" }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ flex: 1 }}>
          <Hero />
          <Info />
        </View>
      </ScrollView>
    </View>
  )
}