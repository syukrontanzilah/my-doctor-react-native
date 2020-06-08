import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header, Profile, List, Gap } from '../../component'
import { colors, getData } from '../../utils'
import { User2, ILnull } from '../../asset'
import { Fire } from '../../config'
import { showMessage } from 'react-native-flash-message'


const UserProfile = ({ navigation }) => {
    const [profile, setProfile] = useState({
        fullName: '',
        profesi: '',
        photo: ILnull,

    });
    useEffect(() => {
        getData('user').then(res => {
            const data = res;
            data.photo = { uri: res.photo }
            setProfile(data)
        })
    }, [])

    const signOut = () => {
        Fire.auth().signOut()
            .then(() => {
                console.log('success sign out')
                navigation.replace('GetStarted')
            }).catch(err => {
                showMessage({
                    message: err.message,
                    type: 'default',
                    backgroundColor: colors.error,
                    color: colors.white,
                })
            })
    }

    return (
        <View style={styles.page}>
            <Header title='Profile'
                onPress={() => navigation.goBack()} />
            <Gap height={10} />
            {
                profile.fullName.length > 0 && <Profile
                    name={profile.fullName}
                    desc={profile.profesi}
                    photo={profile.photo}
                />
            }

            <Gap height={15} />


            <List
                onPress={() => navigation.navigate('EditProfile')}
                name='Edit Profile'
                chat='Last update Yesterday'
                type='next'
                icon='edit-profile' />

            <List name='Language' chat='Last update Yesterday' type='next' icon='language' />

            <List name='Give us Rate' chat='Last update Yesterday' type='next' icon='rate' />

            <List
                name='Sign Out'
                chat='Klik untuk keluar Akun'
                type='next'
                icon='help'
                onPress={signOut} />

        </View>

    )
}

export default UserProfile

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1,
        paddingHorizontal: 10
    }
})
