import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { ILLogo } from '../../asset'
import { Input, Link, Button, Gap } from '../../component/atom'
import { colors, fonts, useForm, storeData, showError, showSuccess } from '../../utils'
import { Fire } from '../../config'
import { useDispatch, } from 'react-redux'


const Login = ({ navigation }) => {
    const [form, setForm] = useForm({
        email: '',
        password: '',
    })
    const dispatch = useDispatch();

    const login = () => {
        dispatch({ type: 'SET_LOADING', value: true })
        Fire.auth()
            .signInWithEmailAndPassword(form.email, form.password)
            .then(res => {
                dispatch({ type: 'SET_LOADING', value: false })
                Fire.database()
                    .ref(`users/${res.user.uid}/`)
                    .once('value')
                    .then(resDB => {
                        if (resDB.val()) {
                            storeData('user', resDB.val())
                            navigation.replace('MainApp')
                        }
                    })
            })
            .catch(err => {
                dispatch({ type: 'SET_LOADING', value: false })
                showError(err.message)
                //showSuccess('Login Success')
            })
    }


    return (

        <ScrollView style={styles.page}>
            <View style={{ height: 80, width: 80 }}>
                <ILLogo />
            </View>
            <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>

            <Input
                label='Email Adress'
                value={form.email}
                onChangeText={(value) => setForm('email', value)} />
            <Gap height={18} />
            <Input
                label='Password'
                value={form.password}
                secureTextEntry
                onChangeText={(value) => setForm('password', value)} />

            <Gap height={10} />
            <Link title='Forgot My Password' size={12} />
            <Gap height={40} />

            <Button title='Sign in' onPress={login} />

            <Gap height={30} />
            <Link title='Create New Account' size={16} align='center'

                onPress={() => navigation.navigate('Register')}
            />
        </ScrollView>

    )
}

export default Login

const styles = StyleSheet.create({
    page: {
        flex: 1,
        padding: 40,
        backgroundColor: colors.white
    },
    title: {
        fontSize: 20,
        color: colors.text.primary,
        marginTop: 40,
        marginBottom: 40,
        fontFamily: fonts.primary[800],
        maxWidth: 153,

    }
})
