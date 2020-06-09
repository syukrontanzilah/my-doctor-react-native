import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { Rs1 } from '../../../asset'
import { fonts, colors } from '../../../utils'

const NewsItem = ({title, date, image}) => {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.judul}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.day}>{date}</Text>
            </View>
            {/* kalau image nya format url, tambahkan objek uri: */}
            <Image source={{uri: image}} style={styles.img} />

        </TouchableOpacity>
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
