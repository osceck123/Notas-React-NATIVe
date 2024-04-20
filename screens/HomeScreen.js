import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import { fetchNotes, addNote } from '../services/apiServices';
import NoteItem from '../components/NoteItem';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function App({SetTokenId}) {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [token, setToken]= useState(null);
  const [id, setId]= useState(null);


  useEffect(()=>{
    const checkAuth = async () => {
      // Verifica si el usuario está autenticado
      const toke = await AsyncStorage.getItem('token');
      const id = await AsyncStorage.getItem('id');

      console.log(toke, 'que tiene toke adentro de la home')
      if (toke) {
        // Si el usuario está autenticado, Deja El login
        setToken(toke);
        setId(id);
      }
    };
    checkAuth();
  },[])

  useEffect(() => {
    fetchNotes()
      .then(data => setNotes(data))
      .catch(error => console.error('Error fetching notes:', error));
  }, [token]);

  const handleAddNote = () => {
   
    addNote(title, content, token, id)
      .then(data => {
        setNotes([...notes, data]);
        setTitle('');
        setContent('');
      })
      .catch(error => console.error('Error adding note:', error));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recetas</Text>
      <TextInput
        style={styles.input}
        placeholder="Título"
        onChangeText={text => setTitle(text)}
        value={title}
      />
      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Contenido"
        onChangeText={text => setContent(text)}
        value={content}
        multiline
      />
      <Button title="Agregar Receta" onPress={handleAddNote} />
      <View style={styles.containerTarjetas}>
          <Text style={styles.title}>Mis Recetas</Text>
          <FlatList
            data={notes}
            renderItem={({ item }) => <NoteItem title={item.title} content={item.content}/>}
            keyExtractor={item => item._id}
          />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign:'center'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    width: '100%',
    marginBottom: 10,
    padding: 10,
  },
  containerTarjetas: {
    flex:1,
    width:'100%',
    backgroundColor: '#acc5e8',
    maxHeight: '100%',
    padding:20,
    marginTop:10
   
  }
});