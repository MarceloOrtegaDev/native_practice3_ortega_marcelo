import React from 'react'
import { View, ScrollView } from 'react-native'
import { Hero } from '../components/Home/Hero'
import { Info } from '../components/Home/Info'
import { FooterBar } from '../components/FooterBar'

export const Home = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#EEF4ED" }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ flex: 1 }}>
          <Hero />
          <Info />
        </View>
      </ScrollView>
      <FooterBar />
    </View>
  )
}
