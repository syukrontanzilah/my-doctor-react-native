import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILLogo } from '../../asset'
import { colors, fonts } from '../../utils'
import { Fire } from '../../config'

const Splash = ({ navigation }) => {
    useEffect(() => {
        const unsubscribe = Fire.auth().onAuthStateChanged((user) => {
            setTimeout(() => {
                if (user) {
                    //user lagi login
                    navigation.replace('MainApp')
                } else {
                    // user logout
                    navigation.replace('GetStarted')
                }
            }, 2000);
        });
        return () => unsubscribe();
    }, [navigation]);


    return (
        <View style={styles.page}>
            <View style={{ height: 100 }}>
                <ILLogo />
            </View>
            <Text style={styles.text}>DokterKu</Text>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.white,
        justifyContent: 'center',
    },
    text: {
        fontSize: 25,
        fontWeight: '800',
        color: colors.text.primary,
        marginTop: 10,
        alignSelf: 'center',
        opacity: 0.7,
        fontFamily: fonts.primary[800],

    }
})
