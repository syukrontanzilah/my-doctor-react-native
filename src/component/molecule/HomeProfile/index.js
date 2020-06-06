import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { User2, } from '../../../asset'
import {fonts, colors} from '../../../utils'

const HomeProfile = ({onPress}) => {
    return (
             <TouchableOpacity style={styles.container}
        onPress={onPress}>
            <Image style={{
                height: 45,
                width: 45,
                borderRadius: 45 / 2,
                marginRight:12,
            }}
                source={User2} />

            <View style={{justifyContent:'center'}}>
                <Text style={styles.name}>Ana Musytaq Yahabibi</Text>
                <Text style={styles.profesi}>Finance Officer</Text>
            </View>
        </TouchableOpacity>
      

     
       
    )
}

export default HomeProfile

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    name: {
        fontSize:16,
        fontFamily: fonts.primary[800],
        color: colors.text.primary

    },
    profesi: {
        fontSize:13,
        fontFamily: fonts.primary[500],
        color: colors.text.secondary
    }
})
