import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { Header, Profile, Input, Button, Gap } from '../../component'
import { colors, getData, storeData } from '../../utils'
import { User1, User2, ILnull } from '../../asset';
import Fire from '../../config'
import { showMessage } from 'react-native-flash-message';
import ImagePicker from 'react-native-image-picker'

const EditProfile = ({ navigation }) => {
    const [profile, setProfile] = useState({
        fullName: '',
        profesi: '',
        email: '',
    });
    const [password, setPassword] = useState('');
    const [photo, setPhoto] = useState(ILnull)
    const [photoForDB, setPhotoForDB] = useState('')

    useEffect(() => {
        getData('user').then(res => {
            const data = res;
            data.photoForDB = res ?.photo ?.length > 1 ? res.photo : ILnull;
            const tempPhoto = res ?.photo ?.length > 1 ? { uri: res.photo } : ILnull;
            setPhoto(tempPhoto);
            setProfile(data)
        });
    }, []);

    const update = () => {
        if (password.length > 0) {
            if (password.length < 6) {
                showMessage({
                    message: 'Pasword harus lebih dari 6 karakter',
                    type: 'default',
                    backgroundColor: colors.error,
                    color: colors.white
                })
            } else {
                updatePassword();
                updateProfileData();
                //navigation.replace('MainApp')
            }
        } else {
            updateProfileData()
            //navigation.replace('MainApp')
        }
    };

    const updatePassword = () => {
        Fire.auth().onAuthStateChanged(user => {
            if (user) {
                user.updatePassword(password)
                    .catch(err => {
                        showMessage({
                            message: err.message,
                            type: 'default',
                            backgroundColor: colors.error,
                            color: colors.white
                        });
                    });
            }
        });
    }

    const updateProfileData = () => {
        const data = profile;
        data.photo = photoForDB;
        Fire.database()
            .ref(`users/${profile.uid}/`)
            .update(data)
            .then(() => {
                storeData('user', data)
                    .then(() => {
                        navigation.replace('MainApp')
                    })
            })
            .catch(err => {
                showMessage({
                    message: err.message,
                    type: 'default',
                    backgroundColor: colors.error,
                    color: colors.white
                })
            });
    };

    const changeText = (key, value) => {
        setProfile({
            ...profile,
            [key]: value,
        });
    };

    const getImage = () => {
        ImagePicker.launchImageLibrary(
            { quality: 0.6, maxWidth: 250, maxHeight: 250 }, 
            response => {
                if (response.didCancel || response.error) {
                    showMessage({
                        message: 'oops kamu sepertinya tidak memilih fotonya?',
                        type: 'default',
                        backgroundColor: colors.error,
                        duration: 3000
                    });
                } else {
                    const source = { uri: response.uri }
                    setPhotoForDB(`data:${response.type};base64, ${response.data}`);
                    setPhoto(source)
                }
            },
        )
    }
    return (
        <View style={styles.page}>
            <Header title='Edit Profile'
                onPress={() => navigation.goBack()} />

            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.content}>
                <Profile
                    onPress={getImage}
                    isRemove
                    photo={photo} />
                <Gap height={24} />

                <Input
                    label='Full Name'
                    value={profile.fullName}
                    onChangeText={value => changeText('fullName', value)}
                />
                <Gap height={24} />

                <Input label='Pekerjaan'
                    value={profile.profesi}
                    onChangeText={value => changeText('profesi', value)} />
                <Gap height={24} />

                <Input label='Email'
                    value={profile.email}
                    disable />
                <Gap height={24} />

                <Input label='Password'
                    secureTextEntry
                    value={password}
                    onChangeText={value => setPassword(value)} />
                <Gap height={40} />

                <View style={{ paddingBottom: 20 }}>
                    <Button title="Save Profile"
                        onPress={update} />
                </View>


            </ScrollView>


        </View>
    )
}

export default EditProfile

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1
    },
    content: {
        padding: 40,
        paddingTop: 0
    }
})
