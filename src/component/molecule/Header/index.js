import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IconBackDark } from '../../../asset'
import { Gap, Button } from '../../atom'
import { colors, fonts } from '../../../utils'
import DarkProfile from './DarkProfile'

const Header = ({onPress, title, type}) => {
    if (type === 'dark-profile'){
        return <DarkProfile onPress={onPress}/>
    }
    return (
        <View style={styles.container(type)}>
            <View style={{}}>
            <Button type ='icon-only' icon = {type=== 'dark'? 'back-light' : 'back-dark'} onPress={onPress}/>
            </View>          
            <Text style={styles.text(type)}>{title}</Text> 
            <Gap width={20}/>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container : (type)=> (
        {
        paddingHorizontal:16,
        backgroundColor: type === 'dark' ? colors. secondary : colors.white,
        paddingVertical:30, 
        flexDirection:'row', 
        borderBottomLeftRadius : type === 'dark' ? 20: 0,
        borderBottomRightRadius: type === 'dark' ? 20: 0,
    }),
    text: (type)=> ({
        flex:1,
        textAlign:'center',
        fontSize:20,
        color: type === 'dark' ? colors.white : colors.text.primary,
        fontFamily: fonts.primary[800],
    })
})
