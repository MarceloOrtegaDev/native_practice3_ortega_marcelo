import { Text, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { useNavigation } from '@react-navigation/native';

export default function ButtonLogout (){
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={()=> navigation.navigate("Login")} style={{alignItems:"center",backgroundColor: '#780000', width:100, padding: 5, borderRadius: 5,}}>
            <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>Logout</Text>
        </TouchableOpacity>
    )
}