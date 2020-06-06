import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors, fonts } from '../../../utils'

const ProfileItem = ({label, value}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.value}>{value}</Text>

        </View>
    )
}

export default ProfileItem

const styles = StyleSheet.create({
   container: {
       marginHorizontal:16,
       paddingBottom:10,
       borderBottomColor: colors.border,
       borderBottomWidth:1,

   },
   label: {
       fontSize:15,
       fontFamily: fonts.primary[500],
       color: colors.text.secondary,
       marginBottom:5,
       marginTop:10
   },
   value: {
       fontSize:16,
       fontFamily: fonts.primary[500],
       color: colors.text.primary
   }
})
