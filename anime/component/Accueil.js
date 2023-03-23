import {StyleSheet, Text, View, Button, Pressable} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function Accueil() {
  const navigation = useNavigation();
  return (
    <View>
      <Text style={styles.h1}>Accueil</Text>

   
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  h1: {
    color: 'black',
    margin: 20,
    padding: 20,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'green',
    margin: 10,
    padding: 10,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
