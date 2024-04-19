import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { singup } from '../services/apiServices';
import { useNavigation } from '@react-navigation/native';

const SignupForm = ({ SetTokenId }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleSignup = async () => {
    const response = await singup(username, password);
    console.log(response, "que tiene ");

    // Verifica si el registro fue exitoso
    if (response) {
      // Si el registro fue exitoso, redirige a la pantalla de login
      navigation.navigate('Login');
    } else {
      // Si el registro no fue exitoso, muestra un mensaje de error
      alert('El registro no fue exitoso. Inténtalo de nuevo.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Username</Text>
      <TextInput
        onChangeText={setUsername}
        placeholder="Enter your name"
        value={username}
        style={styles.input}
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholder="Enter your password"
      />
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Signup</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.loginButton]} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
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
  button: {
    width: '100%',
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: '#007bff', // Color de fondo predeterminado para el botón Signup
  },
  loginButton: {
    backgroundColor: '#28a745', // Color de fondo personalizado para el botón Login
  },
  buttonText: {
    color: '#fff', // Color del texto del botón
  },
});

export default SignupForm;
