import React, {useState} from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { Header, Input, Button, Gap } from '../../component'
import { colors } from '../../utils'

const Register = ({navigation}) => {
    const [fullName, setFullName] = useState('');
    const [profesi, setProfesi] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const onContinue = () => {
        console.log(fullName, profesi, email, password)
       // navigation.navigate('UploadFoto')
    }

    return (
        <View style ={styles.page}>
            <Header onPress={()=> navigation.goBack()} title='Regitrasi'/>

            <ScrollView style ={styles.content}>
                <Input 
                label='Full Name'
                value={fullName} 
                 onChangeText={value => setFullName(value)}
                />
                <Gap height={24}/>

                <Input 
                label='Pekerjaan'
                value={profesi} 
                 onChangeText={value=> setProfesi(value)}
                />
                <Gap height={24}/>

                <Input 
                label='Email Address'
                value={email} 
                   onChangeText={(value)=> setEmail(value)}
                />
                <Gap height={24}/>

                <Input 
                label='Password'
                value={password} 
                secureTextEntry
                 onChangeText={(value)=> setPassword(value)}
                />
                <Gap height={28}/>

                <Button title='Continue' onPress={onContinue} />
                <Gap height={24}/>


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
