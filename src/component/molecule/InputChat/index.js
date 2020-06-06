import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { colors, fonts } from '../../../utils'
import { Button } from '../../atom'

const InputChat = () => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.textInput}
                placeholder='Tulis Pesan untuk Fii Hawa' />
            <Button type='btn-icon-send' disable={true} />
        </View>
    )
}

export default InputChat

const styles = StyleSheet.create({
    container: {
        padding: 16,
        flexDirection:'row'
    },
    textInput: {
        backgroundColor: colors.disable,
        padding: 14,
        borderRadius: 10,
        flex:1,
        marginRight:10,
        fontSize:16,
        fontFamily: fonts.primary[500],
        maxHeight:50
    }
})
