import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILLogo } from '../../../asset'
import { colors, fonts } from '../../../utils'

const DoktorKategori = () => {
    return (
        <View style={styles.container}>
            {/* <DummyDoctor2 /> */}
            <View style={{height:50, width:50, marginBottom:28}}>
            <ILLogo />
            </View>
            <Text style={styles.label}>Saya butuh</Text>
            <Text style={styles.category}>Dokter umum</Text>

        </View>
    )
}

export default DoktorKategori

const styles = StyleSheet.create({
    container: {
        padding:12, backgroundColor: colors.cardLight,
        alignSelf:'flex-start', 
        borderRadius:10,
        marginRight:10,
        width:100,
        height:130
    },
    label: {
        fontSize:12,
        fontFamily: fonts.primary[500],
        color: colors.text.primary
    },
    category: {
        fontSize:12,
        fontFamily: fonts.primary[800],
        color: colors.text.primary
    }
})
