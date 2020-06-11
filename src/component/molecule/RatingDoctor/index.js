import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { IconStart } from '../../../asset'
import { fonts, colors } from '../../../utils'

const RatingDoctor = ({onPress, name, desc, avatar}) => {
    return (
        <TouchableOpacity style={styles.container}
        onPress={onPress}>
            <Image style={{ height: 50, width: 50, borderRadius: 50 / 2, marginRight: 12 }} source={avatar} />

            <View style={{flex:1}}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.doctor}>{desc}</Text>
            </View>

            <View style={styles.star}>
                <IconStart />
                <IconStart />
                <IconStart />
                <IconStart />
                <IconStart />
            </View>
        </TouchableOpacity>
    )
}

export default RatingDoctor

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent:'space-between',
        marginBottom:16,
        marginTop: 10

    },
    name: {
        fontSize: 16,
        fontFamily: fonts.primary[500],
        color: colors.text.primary
    },
    doctor: {
        fontSize: 12, 
        fontFamily: fonts.primary[500], 
        color: colors.text.secondary,
        marginTop:2,
        textTransform:'capitalize'
    },
    star: {
        flexDirection: 'row'
    }
})
