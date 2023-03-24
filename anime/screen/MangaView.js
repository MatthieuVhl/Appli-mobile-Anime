import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { CATEGORIES } from '../data/data'
import Manga from '../models/Manga'


export default function MangaView({navigation, route}) {
    const mangaId = route.params.mangaId

    const monManga = Manga.filter((item) => {
        return item.categoryIds.includes(mangaId)
     
    })

    useLayoutEffect(() => {
        const categorieTitle = CATEGORIES.find(
            (Categories) => Categories.id == mangaId
        ).title;

        navigation.setOptions({
            title : categorieTitle
        })
    },[categorieTitle, navigation])

  return (
    <FlatList data={monManga} keyExtractor={(item) => item.id}
        renderItem={(itemData) => {
              const item = itemData.item
              const Detail = {
                id : item.id,
                title : item.title,
                categorieIds : item.categorieIds,
                imageUrl : item.imageUrl,
                saisons : item.saisons,
                episodes : item.episodes
              }  

            return (<DetailAnime {...Detail}  />)
        }}
    />

  )
}

const styles = StyleSheet.create({})