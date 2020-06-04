import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Doctor1, Doctor2, Doctor3, Doctor4 } from '../../../asset/dummy'
import { IconStart } from '../../../asset'
import { fonts, colors } from '../../../utils'

const RatingDoctor = () => {
    return (
        <View style={styles.container}>
            <Image style={{ height: 50, width: 50, borderRadius: 50 / 2, marginRight: 12 }} source={Doctor3} />

            <View style={{flex:1}}>
                <Text style={styles.name}>Muhammad Fikri</Text>
                <Text style={styles.doctor}>Dokter Gigi</Text>
            </View>


            <View style={styles.star}>
                <IconStart />
                <IconStart />
                <IconStart />
                <IconStart />
                <IconStart />


            </View>
        </View>
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
        fontFamily: fonts.primary[800],
        color: colors.text.primary
    },
    doctor: {
        fontSize: 12, 
        fontFamily: fonts.primary[500], 
        color: colors.text.secondary,
        marginTop:2
    },
    star: {
        flexDirection: 'row'
    }
})
