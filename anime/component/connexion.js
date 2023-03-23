import {StyleSheet, Text, View, Button, Pressable, TextInput} from 'react-native';
import React from 'react';


export default function Connexion() {
  
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Connexion</Text>
     <TextInput style={styles.button} placeholder='email'/>
     <TextInput  style={styles.button} placeholder='mot de passe '/>
     <Pressable><Text style={styles.text}>Connexion</Text></Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
   
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
    borderRadius: 15 , 
    backgroundColor: 'white',
    color: "black",
    margin: 10,
    padding: 10,
    alignItems: 'center',
  },
  text: {
    
    width:150,
    height:50,
    color: 'black',
    fontSize: 20,
    marginLeft:120,
    padding: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems:'center',
    backgroundColor:"green"
  },
});
