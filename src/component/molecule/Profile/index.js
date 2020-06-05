import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { User1, User2 } from '../../../asset'
import { colors, fonts } from '../../../utils'

const Profile = () => {
    return (
        <View style={styles.container}>
            <View style={styles.borderProfile}>
                <Image style={styles.avatar} source={User2} />
            </View>
            <Text style={styles.name}>Zulaikha Alfikriyah</Text>
            <Text style={styles.profesi}>Finance Officer</Text>

        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center', alignItems: 'center'
    },
    borderProfile: {
        width: 110,
        height: 110,
        borderRadius: 110 / 2,
        borderWidth: 1,
        borderColor: 'lightgray',
        backgroundColor: 'lightgray',
        justifyContent: 'center',
        alignItems: 'center'

    },
    avatar: {
        height: 100,
        width: 100,
        borderRadius: 100 / 2
    },
    name: {
        fontSize:20,
        fontFamily: fonts.primary[800],
        color: colors.text.primary,
        marginTop:16
    },
    profesi:{
        fontSize:16,
        fontFamily: fonts.primary[500],
        color: colors.text.secondary,
        marginTop:4
    }
})
