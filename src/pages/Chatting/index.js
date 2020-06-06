import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header, ChatItem, InputChat } from '../../component'
import { fonts, colors } from '../../utils'

const Chatting = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header type='dark-profile' title='Nabilah Kinarsih'  
            onPress={()=> navigation.goBack()}
            />
            <View style={styles.content}>
                    <Text style={styles.chatDate}>Senin, 2 Mei 2020</Text>
                <ChatItem isMe />
                <ChatItem />
            </View>

            <InputChat />
        </View>
    )
}

export default Chatting

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1

    },
    content: {
        flex: 1
    },
    chatDate: {
        fontSize: 11, fontFamily: fonts.primary[500],
        color: colors.text.secondary,
        marginVertical: 20,
        textAlign: 'center',
       
      


    }
})
