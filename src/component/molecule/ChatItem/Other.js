import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { fonts, colors } from '../../../utils'
import { DoctorWanita1, DoctorWanita2, DoctorWanita3, DoctorWanita7 } from '../../../asset'


const Other = ({text, date, photo}) => {
    return (
        <View style={styles.container}>
            <Image style={{ height: 30, width: 30, marginRight: 12, borderRadius: 40 / 2, }} source={photo} />

            <View>
            <View style={styles.chatContent}>
                    <Text style={styles.text}>{text}</Text>
                </View>

                <Text style={styles.date}>{date}</Text>
            </View>

        </View>
    )
}

export default Other

const styles = StyleSheet.create({
    container: {
        marginBottom: 5,
        alignItems: 'flex-end',
        paddingLeft: 16,
        flexDirection: 'row',
        
    },
    chatContent: {
        padding: 12,
        paddingRight: 18,
        backgroundColor: colors.primary,
        maxWidth: '80%',
        borderRadius: 10,
        borderBottomLeftRadius: 0,
    },
    text: {
        fontSize: 16, fontFamily: fonts.primary[500],
        color: colors.text.primary,

    },
    date: {
        fontSize: 10, fontFamily: fonts.primary[500],
        color: colors.text.secondary, marginTop: 2
    }
})