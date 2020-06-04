import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Hospital, Hospital1, Hospital2, Hospital3 } from '../../../asset'
import { colors, fonts } from '../../../utils'

const ListHospital = () => {
    return (
        <View style={styles.container}>
            <Image style={{ height: 60, width: 80, borderRadius: 10, marginRight: 16 }} source={Hospital} />
            <View style={{flex:1, maxWidth:'90%'}}>
                <Text style={styles.title}>Rumah Sakit</Text>
                <Text style={styles.title}>Sekarwangi</Text>
                <Text style={styles.alamat}>Jl. Raya Keraton Padjajaran, kompleks bukit batu herang, Sukabumi</Text>

            </View>


        </View>
    )
}

export default ListHospital

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: colors.border
    },
    title: {
        fontSize: 16,
        fontFamily: fonts.primary[500],
        color: colors.text.primary

    },
    alamat: {
        fontSize:12,
        fontFamily:fonts.primary[500],
        color: colors.text.secondary,
        marginTop:6

    }
})
