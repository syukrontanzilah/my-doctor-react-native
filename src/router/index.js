import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {
    GetStarted, Splash, Register,
    Login, UploadFoto, Doctor, Message, Hospital,
    ChooseDoctor,
    Chatting
} from '../pages'
import { BottomNavigator } from '../component';


const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const MainApp = () => {
    return (
        <Tab.Navigator
            tabBar={props => <BottomNavigator {...props} />}
        >
            <Tab.Screen name='Doctor' component={Doctor} />
            <Tab.Screen name='Message' component={Message} />
            <Tab.Screen name='Hospital' component={Hospital} />

        </Tab.Navigator>
    )
}

const Router = () => {
    return (
        <Stack.Navigator
            initialRouteName='Splash'
            screenOptions={{ headerShown: false }}
        >

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

            <Stack.Screen
                name='MainApp' component={MainApp} />

            <Stack.Screen
                name='ChooseDoctor' component={ChooseDoctor} />

            <Stack.Screen
                name='Chatting' component={Chatting} />

        </Stack.Navigator>
    )
}

export default Router

const styles = StyleSheet.create({})
