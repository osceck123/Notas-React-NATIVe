import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { fetchMisNotas } from '../../services/apiServices';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
const RecetasHome = ({navigation}) => {

  const [notas, setNotas] = useState([]);
  const [id, setId] = useState('')
  const [token, setToken] = useState('')


  const navegation = useNavigation()

  

  useEffect(()=>{
   
   fetchMisNotas().then(data => setNotas(data))
  },[])
  


  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Recetas Guardadas</Text>
      <FlatList 
        data={notas}
        keyExtractor={(item)=> item.id}
        renderItem={({ item }) => (
          <TouchableOpacity  style={styles.button} onPress={() => navegation.navigate('Notas', { item })}>
            <Text >{item.title}</Text>
          </TouchableOpacity>
        )}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0c4af', // Adjust the background color as needed
    fontWeight:'400',
  },
  titulo:{
    padding:20,
    textAlign:'center',
    fontSize:'1.5rem',
    textShadowColor:'#DDDDDD'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});

export default RecetasHome;