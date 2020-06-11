import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { IconSend, IconSendActive } from '../../../asset'
import { colors } from '../../../utils'

const BtnIconSend = ({ disable, onPress}) => {
    if(disable){
        return <View style={styles.container(disable)}>
        <IconSend/> 
    </View>
    }
    return (
        <TouchableOpacity style={styles.container(disable)} onPress = {onPress}>
           <IconSendActive/> 
        </TouchableOpacity>
    )
}

export default BtnIconSend

const styles = StyleSheet.create({
    container: (disable)=>({
        backgroundColor: disable ? colors.disable: colors.tertiary,
        width:50, 
        height:50, 
        padding: 16,
        borderRadius: 10,   
    }),
})
