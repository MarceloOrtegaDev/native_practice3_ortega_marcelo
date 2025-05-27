import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import machine from '../../assets/machine.png';
import datos from '../../assets/cienciaDeDatos.png';
import graficos from '../../assets/graficos.png';

//LA SINTAXIS ES UNA CHOTAAAAAA
export const Info = () => {
  return (
    <View style={style.contenedorPrincipal}>
      <Text style={style.subtitulo}>¿Qué encontrarás en DataMark?</Text>
      <Text style={style.descripcion}>
        Ayúdate a aprender, solo tú puedes hacerlo
      </Text>

      <View style={style.bloque}>
        <View style={style.contenidoTexto}>
          <Text style={style.titulo}>Visualización de datos</Text>
          <Text style={style.texto}>
            Transforma datos complejos en información clara y accionable. 
            Guía completa de los gráficos más importantes y más utilizados para la visualización de datos.
          </Text>
        </View>
        <Image 
          source={graficos}
          style={style.imagen}
        />
      </View>

      <View style={style.bloque}>
        <View style={style.contenidoTexto}>
          <Text style={style.titulo}>Ciencia de Datos</Text>
          <Text style={style.texto}>
            Con esta guía aprenderas los comandos básicos y más escenciales para que puedas manipular datos a tu placer y así convertirte en todo un analista.
          </Text>
        </View>
        <Image 
          source={datos}
          style={style.imagen}
        />
      </View>

      <View style={style.bloque}>
        <View style={style.contenidoTexto}>
          <Text style={style.titulo}>Machine Learning</Text>
          <Text style={style.texto}>
             Qué mejor que complementar todo lo anterior con aprendizaje sobre machine learning, aprende a utilizar las herramientas para crear redes neuronales y aprende a automatizar tus tareas.
          </Text>
        </View>
        <Image 
          source={machine}
          style={style.imagen}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  contenedorPrincipal: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
    paddingBottom: 60,
  },
  subtitulo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1a1a1a',
    marginBottom: 10,
  },
  descripcion: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 40,
  },
  bloque: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  contenidoTexto: {
    flex: 1,
    paddingRight: 16,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#2d3748',
  },
  texto: {
    fontSize: 14,
    lineHeight: 20,
    color: '#4a5568',
  },
  imagen: {
    width: 120,
    height: 120,
    borderRadius: 8,
  },
});