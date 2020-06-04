import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Rs1 } from '../../../asset'
import { fonts, colors } from '../../../utils'

const NewsItem = () => {
    return (
        <View style={styles.container}>
            <View style={styles.judul}>
                <Text style={styles.title}>Apakah mungkin coronavirus akan beakhir pada bulan juni?</Text>
                <Text style={styles.day}>Today</Text>
            </View>

            <Image source={Rs1} style={styles.img} />

        </View>
    )
}

export default NewsItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderBottomWidth:1,
        borderBottomColor: colors.border,
        paddingBottom:12,
        paddingTop:16,
       

    },
    judul:{
        flex:1
    },
    title: {
        fontSize: 16,
        fontFamily: fonts.primary[500],
        color: colors.text.primary,
        maxWidth: '90%'
    },
    day: {
        fontSize: 12,
        fontFamily: fonts.primary[500],
        color: colors.text.secondary,
        marginTop: 4,
    },
    img: {
        height:60,
        width:80,
        borderRadius:8

    }
})
