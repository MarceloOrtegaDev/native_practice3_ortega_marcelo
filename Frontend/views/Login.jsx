import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller} from 'react-hook-form';
import { useState } from 'react';
import { loginUser } from '../services/user.service';

export default function Login() {
  const [user, setUser] = useState({});
  const { control, handleSubmit } = useForm();
  const navigation = useNavigation();
  const onSubmit = async (data) => {
    const { username, password } = data;
    const result = await loginUser(username, password);

    if(result){
      setUser(result);
      navigation.navigate("Home");
    } else {
      setUser("error broer");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar sesión</Text>

      <Text style={styles.Label}>Username</Text>
      <Controller
        control={control}
        name="username"
        rules={{ required: "Usuario es requerido" }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <TextInput
              style={styles.input}
              placeholder="fulanito"
              value={value}
              onChangeText={onChange}
            />
            {error && <Text style={styles.error}>{error.message}</Text>}
          </>
        )}
      />

      <Text style={styles.Label}>Password</Text>
      <Controller
        control={control}
        name="password"
        rules={{ required: "Contraseña es requerida" }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              placeholder="********"
              value={value}
              onChangeText={onChange}
            />
            {error && <Text style={styles.error}>{error.message}</Text>}
          </>
        )}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.buttonText}>Iniciar sesión</Text>
      </TouchableOpacity>
      {user.username && <Text style={styles.success}>Bienvenido {user.username}</Text>}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1B263B',
    flex: 1,
    alignItems: 'center',
    gap: 10,
    padding: 10,
    justifyContent: 'center'
  },
  title: {
    fontSize: 30,
    color: "white",
    fontWeight: 'bold',
    marginBottom: 16
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 5,
    padding: 15,
    color: 'white',
    fontWeight: "bold",
    marginBottom: 10,
    width:250
  },
  button: {
    backgroundColor: 'red',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    width: 250,
  },
  buttonText: {
    fontSize:15,
    color: 'white',
    fontWeight: 'bold'
  },
  error: {
    color: 'red',
    fontWeight:"bold",
    marginBottom: 10
  },
  success: {
    marginTop: 20,
    fontSize: 20,
    color: "green"
  },
  Label:{
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    right:90
  }
});
