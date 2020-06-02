import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILLogo } from '../../asset'

const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('GetStarted')
        }, 3000)
    }, [navigation])
    return (
        <View style={styles.page}>
            <View style={{ height: 100 }}>
                <ILLogo />
            </View>
            <Text style={styles.text}>My Doctor</Text>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'wheat',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: '800',
        color: 'red',
        marginTop: 10,
        alignSelf: 'center',
        opacity: 0.7
    }
})
