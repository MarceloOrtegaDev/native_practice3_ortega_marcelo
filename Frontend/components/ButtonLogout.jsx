import { Text, TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router';

export default function ButtonLogout (){
    const router = useRouter();
    return (
        <TouchableOpacity onPress={()=> router.push("/")} style={{alignItems:"center",backgroundColor: '#780000', width:100, padding: 5, borderRadius: 5,}}>
            <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>Logout</Text>
        </TouchableOpacity>
    )
}