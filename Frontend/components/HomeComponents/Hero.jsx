import React from 'react'
import { View, Text, StyleSheet, Platform, Image } from 'react-native'
import banner from '../../assets/banner.png';

export const Hero = () => {
  return (
    <View style={style.contenedorHero}>
        <View style={style.Radio}>
            <Text style={style.titulo}>DataMark</Text>
        </View>
        <View style={style.presentacion}>
            <Image source={banner} style={{ height: "300", width: "300", borderRadius:20 }} />
            <Text style={style.presentacionTexto}>Descubre el poder de la visualización de datos, la ciencia de datos y el machine learning en un solo lugar. Aprende a transformar información en insights valiosos con herramientas interactivas y explicaciones claras.</Text>
        </View>
    </View>
  )
}

const style = StyleSheet.create({
  contenedorHero:{
    height: "auto",
    justifyContent: "center",
    flexDirection: "column",
    gap:"15",
    marginTop: "12",
    padding:"10",
    backgroundColor: "#134074"
  },
  titulo:{
    justifyContent: "center",
    textAlign: "center",
    fontSize: Platform.OS === "web" ? 30 : 30,
    color: "white",
    fontWeight: Platform.OS === "web" ? 'bold' : 'bold',
    },
  presentacionTexto:{
    padding: "10",
    fontSize: Platform.OS === "web" ? 20 : 18,
    fontWeight: Platform.OS === "web" ? 'bold' : 'bold',
    justifyContent: "center",
    textAlign: "center",
    color: "white"
  },
  Radio:{
    borderRadius: 20,
    backgroundColor: "red"
  },
  presentacion:{
    flexDirection: "column-reverse",
    justifyContent: "center",
    alignItems:"center",
    gap: "10"
  }
})