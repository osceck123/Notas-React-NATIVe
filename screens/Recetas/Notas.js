import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { View, Text, Button } from 'react-native';



const Notas = ({ route, navigation}) => {
  const { item } = route.params;
 
  
  return (
    <View>
      <Text>{item.title}</Text>
      <Text>{item.content}</Text>
    </View>
  );
};
export default Notas;