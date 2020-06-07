import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { Header, Button, Link, Gap } from '../../component'
import { ILnull, ILLogo, IconPlus, IconRemove } from '../../asset'
import { colors, fonts } from '../../utils';
import ImagePicker from 'react-native-image-picker';
import { showMessage } from 'react-native-flash-message'

const UploadFoto = ({ navigation, route }) => {
    const {fullName, profesi,} = route.params;
    const [hasPhoto, setHasPhoto] = useState(false);
    const [photo, setPhoto] = useState(ILnull)
    const getImageFromGallery = () => {
        ImagePicker.launchImageLibrary({}, response => {
            console.log('response: ', response)
            if (response.didCancel || response.error) {
                showMessage({
                    message: 'oops kamu sepertinya tidak memilih fotonya?',
                    type: 'default',
                    backgroundColor: colors.error,
                    duration: 3000
                });
            } else {
                const source = { uri: response.uri }
                setPhoto(source)
                setHasPhoto(true)
            }

        });
    }
    return (
        <View style={{ flex: 1, backgroundColor: 'white', }}>
            <Header title='Upload Photo' />

            <View style={{ justifyContent: 'space-between', flex: 1, paddingHorizontal: 40, paddingBottom: 40, paddingTop: 50 }}>

                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: 1
                }}>
                    {/* photo profil */}
                    <TouchableOpacity
                        onPress={getImageFromGallery}
                        style={{
                            height: 120, width: 120, borderWidth: 1, borderRadius: 120 / 2, borderColor: '#edeef0',
                            alignItems: 'center', justifyContent: 'center',
                            backgroundColor: '#edeef0'
                        }}>
                        <ILnull style={{}} />
                        <Image source={photo} style={{ width: 110, height: 110, borderRadius: 110 / 2, position: 'absolute' }} />


                        {/* yg ini ngakalin aja hehe */}
                        {/* <View style={{
                            height: 120,
                            width: 120,
                            borderRadius: 120 / 2, backgroundColor: 'rgba(0,0,0,0.1)',
                            justifyContent: 'center', alignItems: 'center'
                        }}>
                            <View style={{}}>
                                <ILnull />
                            </View>
                        </View> */}

                        {/* icon tambah dan remove photo */}
                        {hasPhoto && <IconRemove style={{ position: 'absolute', bottom: 0, right: 8, backgroundColor: 'white', borderRadius: 100 }} />}

                        {!hasPhoto && <IconPlus style={{ position: 'absolute', bottom: 0, right: 8, backgroundColor: 'white', borderRadius: 100 }} />}
                    </TouchableOpacity>

                    <Text style={styles.name}>{fullName}</Text>
                    <Text style={styles.profesi}>{profesi}</Text>
                </View>

                <View style={{ justifyContent: 'center', }}>
                    <Button
                        disable={!hasPhoto}
                        title='Upload and Continue'
                        onPress={() => navigation.replace('MainApp')} />
                    <Gap height={30} />
                    <Link
                        title='Skip for this'
                        align='center'
                        size={16}
                        onPress={() => navigation.replace('MainApp')} />
                </View>
            </View>


        </View>
    )
}

export default UploadFoto

const styles = StyleSheet.create({
    name: {
        fontSize: 24,
        color: colors.text.primary,
        fontFamily: fonts.primary[800],
        textAlign: 'center',
        marginTop: 20,
        opacity: 0.7
    },
    profesi: {
        fontSize: 16,
        fontFamily: fonts.primary[300],
        textAlign: 'center',
        color: colors.text.secondary,
        marginTop: 8

    }
})
