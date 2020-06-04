import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILLogo, ILtambah, ILnull, ILPlus } from '../../../asset'
import { colors, fonts } from '../../../utils'

const DoktorKategori = ({ category }) => {
    const Icon = () => {
        if (category === 'Dokter Umum') {
            return <View style={{ height: 50, width: 50, marginBottom: 28 }}>
                <ILLogo />
            </View>
        }
        if (category === 'Dokter Gigi') {
            return <View style={{ height: 50, width: 50, marginBottom: 28 }}>
                <ILtambah />
            </View>
        }
        if (category === 'Psikiater') {
            return <View style={{ height: 50, width: 50, marginBottom: 28 }}>
                <ILnull />
            </View>
        } if(category === 'Dokter Specialist'){
            return <View style={{ height: 50, width: 50, marginBottom: 28 }}>
                <ILPlus/>
            </View> 
        }
        return <View style={{ height: 50, width: 50, marginBottom: 28 }}>
            <ILLogo />
        </View>

    }
    return (
        <View style={styles.container}>
            {/* <DummyDoctor2 /> */}
            <Icon />
            <Text style={styles.label}>Saya butuh</Text>
            <Text style={styles.category}>{category}</Text>

        </View>
    )
}

export default DoktorKategori

const styles = StyleSheet.create({
    container: {
        padding: 12, backgroundColor: colors.cardLight,
        alignSelf: 'flex-start',
        borderRadius: 10,
        marginRight: 10,
        width: 100,
        height: 140,
    },
    label: {
        fontSize: 12,
        fontFamily: fonts.primary[500],
        color: colors.text.primary
    },
    category: {
        fontSize: 12,
        fontFamily: fonts.primary[800],
        color: colors.text.primary,
    }
})
