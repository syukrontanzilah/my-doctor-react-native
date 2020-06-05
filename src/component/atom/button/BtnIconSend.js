import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IconSend, IconSendActive } from '../../../asset'
import { colors } from '../../../utils'

const BtnIconSend = ({ disable}) => {
    return (
        <View style={styles.container(disable)}>
            { disable &&   <IconSend/> }
            { !disable && <IconSendActive/> }
        
        </View>
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
