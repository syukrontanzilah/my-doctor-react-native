import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Doctor1 } from '../../../asset'
import { colors, fonts } from '../../../utils'

const ListChatDoctor = () => {
    return (
        <View style={styles.conteiner}>
            <Image source={Doctor1} style={styles.Avatar} />
            <View>
                <Text style={styles.name}>dr. Alexandra Joanna</Text>
                <Text style={styles.chat}>Baik bu terimakasih banyak atas waktu nya</Text>
            </View>


        </View>
    )
}

export default ListChatDoctor

const styles = StyleSheet.create({
    conteiner: {
        flexDirection: 'row',
        padding:16,
        borderBottomWidth:1,
        borderBottomColor: colors.border,
        alignItems:'center'
    },
    Avatar: {
        height: 45,
        width: 45,
        borderRadius: 45 / 2,
        marginRight: 12,

    },
    name: {
        fontSize:16,
        fontFamily: fonts.primary[800],
        color: colors.text.primary,
        marginBottom:4
    },
    chat: {
        fontSize:13,
        fontFamily: fonts.primary[500],
        color: colors.text.secondary
    }

})
