import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import MangaItem from './component/Anime'

export default function MangaItem({ id, title, imageUrl, saisons, episodes, detail }) {
    const navigation = useNavigation()
    return (
        <View style={styles.Anime}>
            <Pressable  style={({ pressed }) => (pressed ? styles.buttonPressed : null)} onPress={() => navigation.navigate("AnimeView", { categorieId : id})}>
                <View style={styles.innerContainer}>
                    <View>
                        <Image source={{ url: imageUrl }} style={styles.image} />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <MealDetails
                        saisons={saisons}
                        episodes={episodes}
                        detail={detail}
                    />
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    Anime: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
    },
    buttonPressed: {
        opacity: 0.5,
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8,
    },
})