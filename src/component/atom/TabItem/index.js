import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { IconDoctor, IconDoktorActive, IconMessage, IconMessageActive, IconHospital, IconHospitalActive } from '../../../asset'
import { colors, fonts } from '../../../utils'

const TabItem = ({title, active, onPress, onLongPress}) => {
    const Icon = () => {
        if(title === 'Doctor'){
            return active ? <IconDoktorActive/> : <IconDoctor />
        }
        if (title === 'Message'){
            return active ? <IconMessageActive/> : <IconMessage />
        }
        if (title === 'Hospital'){
            return active ? <IconHospitalActive/> : <IconHospital />
        }
        return < IconDoctor />
    }

    return (
        <TouchableOpacity style={styles.container} onPress={onPress} onLongPress ={onLongPress}>
            <View style={{height:25, width:25}}>
                 <Icon />
            </View>
           
            <Text style={styles.text(active)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default TabItem

const styles = StyleSheet.create({
    container: {
        alignItems:'center'
    },
    text : (active) => (
        {
        fontSize:11,
        color: active ? colors.text.menuActive : colors.text.menuInactive,
        fontFamily : fonts.primary[500]
        

    })
})
