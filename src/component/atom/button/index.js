import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { colors, fonts } from '../../../utils'

import IconOnly from './iconOnly'

const Button = ({type, title, onPress, icon}) => {
    if(type === 'icon-only'){
        return(
            <IconOnly icon={icon} onPress ={onPress} />
        )
    }
    return (
        <TouchableOpacity style={styles.container(type)} onPress={onPress}>
            <Text style={styles.text(type)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    container: (type) => ({
        backgroundColor: type === 'secondary' ?  colors.button.secondary.background : colors.button.primary.background, 
        paddingVertical:12, 
        borderRadius:10
    }),
    text:(type)=> ({
        fontWeight:'600',
        fontSize:16, 
        fontFamily:fonts.primary[500],
        textAlign:'center',
        color: type === 'secondary' ? colors.button.secondary.text : colors.button.primary.text,
    })
})