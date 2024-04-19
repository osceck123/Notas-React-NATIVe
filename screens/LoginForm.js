import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet,  } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { login } from '../services/apiServices';


const LoginForm = ({SetTokenId}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');



  const handleLogin = async () => {
    // Aquí podrías realizar validaciones adicionales si es necesario
    // Por ejemplo, verificar si los campos no están vacíos
     const response = await login(username, password);
     console.log(response, "que tiene response")
    // Simulación de solicitud de inicio de sesión
    const token = response.token;
    const id = response.id
    console.log(token, 'que token tengo')

    // Guardar el token en AsyncStorage
    await AsyncStorage.setItem('token', token);
    await AsyncStorage.setItem('id', id);

    SetTokenId(true);
    
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Username</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder="Enter your username"
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholder="Enter your password"
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
});

export default LoginForm;
