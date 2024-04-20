import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NoteItem = ({ title, content }) => {
  return (
    <View style={styles.note}>
      <Text style={styles.noteTitle}>{title}</Text>
      <Text>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  note: {
    flex:10,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    padding:10,
    marginBottom: 15,
    width:'100%',

  },
  noteTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
    fontSize: '1.1rem'
  },
});

export default NoteItem;
