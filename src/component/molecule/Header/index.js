import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IconBackDark } from '../../../asset'
import { Gap } from '../../atom'
import { colors } from '../../../utils'

const Header = () => {
    return (
        <View style={styles.container}>
            <View style={{height:40, width:40, alignItems:'center'}}>
            <IconBackDark />
            </View>
            <Text style={styles.text}>Register</Text> 
            <Gap width={40}/>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container :{
        paddingHorizontal:16,
        backgroundColor: colors.white,
        paddingVertical:30, 
        flexDirection:'row', 
    },
    text: {
        flex:1,
        textAlign:'center',
        fontSize:20,
        color: colors.text.primary,
        fontFamily:'GlacialIndifference-Bold',
    }
})
