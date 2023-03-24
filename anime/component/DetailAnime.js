import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Detail({ saisons, episodes, details }) {
    return (
        <View style={styles.details}>
            <Text style={styles.detailItem}>{saisons}</Text>
            <Text style={styles.detailItem}>
                {episodes.toUpperCase()}
            </Text>
            <Text style={styles.detailItem}>
                {details.toUpperCase()}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12,
        color: "black",
    },
})