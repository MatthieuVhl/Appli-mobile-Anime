import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CategorieScreen from '../screen/CategorieScreen'


export default function Catalogue({}) {
  return (
  <CategorieScreen/>
  )
  
  
}

const styles = StyleSheet.create({
  CatalogueItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: '#e2b497',
  },
  CatalogueText: {
    color: '#351401',
    textAlign: 'center',
  },
})