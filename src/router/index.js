import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { GetStarted, Splash, Register, Login, UploadFoto } from '../pages'


const Stack = createStackNavigator()

const Router = () => {
    return (
        <Stack.Navigator
            initialRouteName='Splash'
            screenOptions={{ headerShown: false }}>

            <Stack.Screen
                name='Splash' component={Splash} />

            <Stack.Screen
                name='GetStarted' component={GetStarted} />

            <Stack.Screen
                name='Register' component={Register} />

            <Stack.Screen
                name='Login' component={Login} />

            <Stack.Screen
                name='UploadFoto' component={UploadFoto} />


        </Stack.Navigator>
    )
}

export default Router

const styles = StyleSheet.create({})
