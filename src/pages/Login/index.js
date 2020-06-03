import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { ILLogo } from '../../asset'
import { Input, Link, Button, Gap } from '../../component/atom'
import { colors, fonts } from '../../utils'

const Login = ({navigation}) => {
    return (
        <ScrollView style={styles.page}>
            <View style={{height:80, width:80}}>
            <ILLogo/>
            </View>
            <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
            <Input label = 'Email Adress' />
            <Gap height={18}/>
            <Input label = 'Password'/>
            <Gap height={10}/>
            <Link title='Forgot My Password' size={12}/>
            <Gap height={40}/>
            <Button title='Sign in' onPress={() => navigation.replace('MainApp')}/>
            <Gap height={30}/>
            <Link title = 'Create New Account' size= {16} align='center'/>
        </ScrollView>
    )
}

export default Login

const styles = StyleSheet.create({
    page : {
        flex:1,
        padding:40,
        backgroundColor: colors.white
    },
    title: {
        fontSize:20, 
        color: colors.text.primary, 
        marginTop:40,
        marginBottom:40,
        fontFamily: fonts.primary[800],
        maxWidth:153,

    }
})
