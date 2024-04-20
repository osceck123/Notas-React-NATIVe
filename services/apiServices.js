const BASE_URL = 'http://localhost:3000/api';
import AsyncStorage from "@react-native-async-storage/async-storage";

export const fetchNotes = async () => {
  try {
    const response = await fetch(`http://localhost:3000/api/notas`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching notes:', error);
    throw error;
  }
};

export const addNote = async (title, content, token, userId) => {
  try {
    const response = await fetch(`http://localhost:3000/api/notes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ title, content, userId }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error adding note:', error);
    throw error;
  }
};

export const fetchMisNotas = async () => {
   // Verifica si el usuario está autenticado
   const id = await AsyncStorage.getItem('id');
  try {
    const response = await fetch(`http://localhost:3000/api/buscarNota`, {
      method: 'POST', 
      headers:  {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({id})});
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching notes:', error);
    throw error;
  }
};



//agregar el singup
export const singup = async (username, password) => {
    try {
        console.log('dentro del singup services')
      const response = await fetch(`http://localhost:3000/api/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      console.log(data, "que tiene data")
      return data;
    } catch (error) {
      console.error('Error adding note:', error);
      throw error;
    }
  };


  //corregir el login
export const login = async (username, password) => {
    try {
        console.log('dentro del singup services')
      const response = await fetch(`http://localhost:3000/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      console.log(data, "que tiene data")
      return data;
    } catch (error) {
      console.error('Error adding note:', error);
      throw error;
    }
  };

  