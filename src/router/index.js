import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {
    GetStarted, Splash, Register,
    Login, UploadFoto, Doctor, Message, Hospital,
    ChooseDoctor,
    Chatting,
    UserProfile,
    EditProfile, DoctorProfile
} from '../pages'
import { BottomNavigator } from '../component';


const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()
const forFade = ({ current }) => ({
    cardStyle: {
        opacity: current.progress,
    },
})

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
            initialRouteName='UploadFoto'
            screenOptions={{ 
                headerShown: false,
                cardStyleInterpolator: forFade
             }}
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

            <Stack.Screen
                name='UserProfile' component={UserProfile} />
           
            <Stack.Screen
                name='EditProfile' component={EditProfile} />

            <Stack.Screen
                name='DoctorProfile' component={DoctorProfile} />

        </Stack.Navigator>
    )
}

export default Router

const styles = StyleSheet.create({})
