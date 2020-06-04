import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ListChatDoctor } from '../../component'
import { colors, fonts } from '../../utils'

const Message = () => {
    return (
        <View style={styles.page}>
            <View style={styles.content}>
                <Text style={styles.title}>Messages</Text>
                <ListChatDoctor />
                <ListChatDoctor />
                <ListChatDoctor />
            </View>



        </View>
    )
}

export default Message

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.secondary, flex: 1
    },
    content: {
        backgroundColor: colors.white, flex: 1,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    title: {
        fontSize: 22,
        fontFamily: fonts.primary[800],
        color: colors.text.primary,
        marginTop:30, 
        marginLeft:16,
        marginBottom:10
    }

})
