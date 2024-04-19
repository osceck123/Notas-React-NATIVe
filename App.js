import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import HomeScreen from './screens/HomeScreen';
import LoginForm from './screens/LoginForm';
import SignupForm from './screens/SingupForm';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LandingScreen from './screens/Landing';


const Stack = createNativeStackNavigator();

function App() {

  const [tokenId,SetTokenId] = useState(false)

  useEffect(()=>{
    const checkAuth = async () => {
      // Verifica si el usuario está autenticado
      const token = await AsyncStorage.getItem('token');
      console.log(token, 'que token tengo en la app')
      if (token) {
        // Si el usuario está autenticado, Deja El login
        SetTokenId(true)
      }
    };

    checkAuth();

  })

  return (
    <NavigationContainer>
      <Stack.Navigator>
      {tokenId ? (
        <Stack.Group>
          <Stack.Screen name="Home" component={()=> <HomeScreen SetTokenId={SetTokenId}/>} options={{ title: 'Notas' }} />
        </Stack.Group>

      ):(
        <Stack.Group >
          <Stack.Screen name="Signup" component={()=><SignupForm SetTokenId={SetTokenId}/>} options={{ title: 'Registrarse',  }} />
          <Stack.Screen name="Login" component={()=><LoginForm SetTokenId={SetTokenId}/>} options={{ title: 'Iniciar Sesión' }} />
        </Stack.Group>
      )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
