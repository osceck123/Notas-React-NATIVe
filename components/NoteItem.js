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
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
  },
  noteTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default NoteItem;
