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
      <Text style={styles.title}>Notas</Text>
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
      <Button title="Agregar Nota" onPress={handleAddNote} />
      <FlatList
        data={notes}
        renderItem={({ item }) => <NoteItem title={item.title} content={item.content} />}
        keyExtractor={item => item._id}
      />
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
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    width: '100%',
    marginBottom: 10,
    padding: 10,
  },
});