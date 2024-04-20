import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import HomeScreen from './screens/HomeScreen';
import LoginForm from './screens/LoginForm';
import SignupForm from './screens/SingupForm';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Recetas from './screens/Recetas';
import Logout from './screens/Logout';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator()

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
    {tokenId ? (
      <Drawer.Navigator >
        <Drawer.Screen name="Home" component={() => <HomeScreen SetTokenId={SetTokenId} />} options={{ title: 'Recetas',
       drawerIcon: ({ focused, size }) => (
        <Ionicons
          name={focused ? 'newspaper-outline' : 'newspaper-outline'}
          size={size}
          color={'#000'} // Color del icono
        />
      ), }} />
        <Drawer.Screen name="Mis Recetas" component={Recetas} options={{
           drawerIcon: ({ focused, size }) => (
            <Ionicons
              name={focused ? 'folder-open-outline' : 'folder-outline'}
              size={size}
              color={'#000'} // Color del icono
            />
          ),
        }}/>
        <Drawer.Screen name="Logout" component={Logout}  options={{
          title: 'Logout',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name={focused ? 'exit-outline' : 'exit'}
              size={size}
              color={'#000'} // Color del icono
            />
          ),
        }} />
      </Drawer.Navigator>
    ) : (
      <Stack.Navigator>
        <Stack.Group >
          <Stack.Screen name="Signup" component={() => <SignupForm SetTokenId={SetTokenId} />} options={{ title: 'Registrarse', }} />
          <Stack.Screen name="Login" component={() => <LoginForm SetTokenId={SetTokenId} />} options={{ title: 'Iniciar Sesión' }} />
        </Stack.Group>
      </Stack.Navigator>
    )}

  
  </NavigationContainer>
  );
}

export default App;
