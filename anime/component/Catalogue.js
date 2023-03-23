import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


export default function Catalogue({data}) {
  return data.map((item,i)=>(
    <View key={i} style={styles.CatalogueItem}>
        <Text style={styles.Text}>{item}</Text>
    </View>
  )
  
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