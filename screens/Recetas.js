import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RecetasHome from './Recetas/RecetasHome';
import Notas from './Recetas/Notas';

const Stack = createNativeStackNavigator();


const Recetas = () => {




  return (

    <Stack.Navigator>
      <Stack.Screen name="RecetasHome" component={RecetasHome} options={{ title: 'Recetas Home'}} />
      <Stack.Screen name="Notas" component={Notas} options={{ title: 'Recetas Mias', }} />
  </Stack.Navigator>

  );
};




export default Recetas;
