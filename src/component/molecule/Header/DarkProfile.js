import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { colors, fonts } from '../../../utils'
import { Button } from '../../atom'
import { DoctorWanita1, DoctorWanita3 } from '../../../asset'

const DarkProfile = () => {
    return (
        <View style={styles.container}>
            <Button type='icon-only' icon='back-light' />
            <View style={styles.content}>
                <Text style={styles.name}>Nabilah Kinarsih</Text>
                <Text style={styles.desc}>Dokter Umum</Text>
            </View>

            <Image style={{ height: 46, width: 46, borderRadius: 46 / 2 }} source={DoctorWanita3} />

        </View>
    )
}

export default DarkProfile

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.secondary,
        paddingVertical: 30,
        paddingLeft: 20, paddingRight: 16,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        flexDirection: 'row',
        alignItems:'center'
    },
    content: {
        flex: 1
    },
    name: {
        fontSize:20,
        fontFamily: fonts.primary[800],
        color: colors.white,
        textAlign:'center',
    },
    desc: {
        fontSize:14,
        fontFamily: fonts.primary[500],
        color: colors.text.subtitle,
        textAlign:'center',
        marginTop:4
    }
})
