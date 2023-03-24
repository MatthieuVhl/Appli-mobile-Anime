import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import CategorieTitre from '../component/CategorieTitre'
import { CATEGORIE,  } from '../data/data'

export default function CategorieScreen({navigation}) {
  return (
    <FlatList data={CATEGORIE} keyExtractor={(item)=> item.id} 
    renderItem={(itemData)=>{
     return(
       <CategorieTitre title={itemData.item.categorie} color={itemData.item.color} onPress={()=> navigation.navigate('MangaView',{CategorieId: itemData.item.id})}/>
     )
    }} numColumns={2}/>
  )
}

const styles = StyleSheet.create({})