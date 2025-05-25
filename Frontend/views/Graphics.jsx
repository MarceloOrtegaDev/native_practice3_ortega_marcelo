import { Text, View, Image, StyleSheet, ScrollView } from 'react-native'
import { graficos } from '../utils/graficos'

export const Graphics = () => {
  return (
    <ScrollView contentContainerStyle={{flexGrow:1, paddingBottom: 56}}>
        <View style={style.contenedor}>
            <Text style={style.titulo}>Gráficos a tener en cuenta al trabajar con visualización de datos</Text>
            {graficos.map((gr, id)=>{
                return(
                    <View key={id} style={style.bloque}>
                        <Text style={style.tituloBloque}>
                            {gr.title}
                        </Text>
                        <View style={style.bloque2}>
                            <Text style={style.descripcion}>
                                {gr.description}
                            </Text>
                            <Image source={{uri: gr.image}} style={{height: 90, width:150, borderRadius: 10}}/>
                        </View>
                </View>
            )})}
        </View>
    </ScrollView>
  )
}

const style = StyleSheet.create({
    contenedor:{
        flex: 1,
        backgroundColor: "#2B2D42",
        padding: 8,
    },
    titulo:{
        fontSize: 20,
        justifyContent: "center",
        textAlign: "center",
        color: "white",
        fontWeight: "bold",
        marginBottom: 20,
        textShadowColor: "rgba(0, 0, 0, 0.5)",
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 3,
        backgroundColor: "red",
        borderRadius: 10

    },
    bloque:{
        backgroundColor: '#EDF2F4',
        marginBottom: 10,
        padding: 10,
        borderRadius: 3,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    tituloBloque:{
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 8
    },
    bloque2:{
        flex:1,
        flexDirection: "row",
        padding: 2.2,
        maxWidth: "95%",
        gap: 7
    },
    descripcion:{
        maxWidth: "60%"
    }
})


