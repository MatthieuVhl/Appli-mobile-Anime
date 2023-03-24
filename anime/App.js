import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Connexion from './component/connexion';

import {createDrawerNavigator} from '@react-navigation/drawer';
import Inscription from './component/inscription';
import {NavigationContainer} from '@react-navigation/native';
import Accueil from './component/Accueil';
import Favoris from './component/Favoris';
import Catalogue from './component/Catalogue';

const Drawer = createDrawerNavigator();

function Menu() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Accueil" component={Accueil} />
      <Drawer.Screen name="Connexion"component={Connexion}/>
      <Drawer.Screen name="Inscription" component={Inscription} />
      <Drawer.Screen name="Manga" component={Catalogue} />
      <Drawer.Screen name="Favoris" component={Favoris} />
      
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Menu />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
