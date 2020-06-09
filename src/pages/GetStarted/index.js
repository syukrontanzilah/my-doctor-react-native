import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import { ILLogo, Bckg } from '../../asset'
import { Button, Gap } from '../../component'
import { NavigationContainer } from '@react-navigation/native'
import { colors, fonts } from '../../utils'


const GetStarted = ({navigation}) => {
    return (
        <ImageBackground source={Bckg} style={styles.page}>
            <View>
                <View style={{ height: 100, width: 100 }}>
                    <ILLogo />
                </View>
                <Text style={styles.title}>Konsultasi dengan dokter jadi lebih mudah & flexible</Text>
            </View>

            <View>
                <Button title ='Get Started' onPress ={()=> navigation.navigate('Register')}/>
                <Gap height={16} />
                <Button title = 'Sign in' type='secondary'
                onPress = {()=> navigation.navigate('Login')}/>
            </View>

        </ImageBackground>
    )
}

export default GetStarted

const styles = StyleSheet.create({
    page: {
        padding: 40,
        backgroundColor: colors.white,
        flex:1,
        justifyContent:'space-between',
    },
    title: {
        fontSize: 28,
        color: 'green',
        marginTop: 100, 
        fontFamily: fonts.primary[500],
    }
})
