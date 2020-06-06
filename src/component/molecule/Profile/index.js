import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { User1, User2, IconRemove } from '../../../asset'
import { colors, fonts } from '../../../utils'

const Profile = ({ name, desc, isRemove, avatar }) => {
    return (
        <View style={styles.container}>
            <View style={styles.borderProfile}>
                <Image style={styles.avatar} source={avatar} />
                {isRemove && (
                    <IconRemove style={{ position: 'absolute', bottom: 5, right: 8, backgroundColor: 'white', borderRadius: 100,}} />
                )}
            </View>
            {name && (
                <View>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.profesi}>{desc}</Text>
                </View>
            )}
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
        fontSize: 20,
        fontFamily: fonts.primary[800],
        color: colors.text.primary,
        textAlign: 'center',
        marginTop: 16, 
    },
    profesi: {
        fontSize: 16,
        fontFamily: fonts.primary[500],
        color: colors.text.secondary,
        marginTop: 4,
        textAlign: 'center'
    }
})
