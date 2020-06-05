import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { colors, fonts } from '../../../utils'
import { IconNext } from '../../../asset'

const ListChatDoctor = ({profil, name, chat, type, onPress}) => {
    return (
        <TouchableOpacity style={styles.conteiner}
        onPress={onPress}>
            <Image source={profil} style={styles.Avatar} />
            <View style={styles.content}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.chat}>{chat}</Text>
            </View>
            {
                type === 'next' && <IconNext />
            }


        </TouchableOpacity>
    )
}

export default ListChatDoctor

const styles = StyleSheet.create({
    conteiner: {
        flexDirection: 'row',
        padding:16,
        borderBottomWidth:1,
        borderBottomColor: colors.border,
        alignItems:'center',
        justifyContent:'space-between'
    },
    content: {
flex:1
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
