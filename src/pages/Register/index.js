import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { Header, Input, Button, Gap } from '../../component'
import { colors } from '../../utils'

const Register = ({navigation}) => {
    return (
        <View style ={styles.page}>
            <Header onPress={()=> navigation.goBack()} title='Regitrasi'/>

            <ScrollView style ={styles.content}>
                <Input label='Full Name' />
                <Gap height={24}/>

                <Input label='Pekerjaan' />
                <Gap height={24}/>

                <Input label='Email Address' />
                <Gap height={24}/>

                <Input label='Password' />
                <Gap height={24}/>

                <Button title='Continue' />

            </ScrollView>

        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    page: {
        backgroundColor:colors.white,
        flex:1
    },
    content: {
        padding:40, 
        paddingTop:0
    }
})
