import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { colors, fonts } from '../../../utils'
import { Button } from '../../atom'

const InputChat = ({value, onChangeText, onButtonPress}) => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.textInput}
            value = {value}
            onChangeText = {onChangeText}
                placeholder='Tulis Pesan untuk Fii Hawa' />
            <Button 
            type='btn-icon-send' 
            disable = {value.length < 1}
            onPress = {onButtonPress}
             />
        </View>
    )
}

export default InputChat

const styles = StyleSheet.create({
    container: {
        padding: 16,
        flexDirection:'row',
        backgroundColor: colors.white,
        paddingTop: 5,
        paddingBottom:10

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
