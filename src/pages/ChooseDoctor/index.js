import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header, ListChatDoctor } from '../../component'
import { Doctor1, Doctor2, Doctor3, Doctor4, DoctorWanita1, DoctorPria1, DoctorWanita2, IconNext, DoctorPria2, DoctorPria3, DoctorWanita5, DoctorWanita6, DoctorWanita3 } from '../../asset'
import { colors } from '../../utils'

const ChooseDoctor = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header type= 'dark' title='Pilih Dokter Umum'
            onPress={()=> navigation.goBack()} />

            <ListChatDoctor 
            onPress ={()=> navigation.navigate('Chatting')}
            profil={DoctorWanita3} name='Nabilah Kinarsih' chat='Wanita' type= 'next'/>

            <ListChatDoctor profil={DoctorWanita2} name='Maissy Pramasella' chat='Wanita' type='next'/>
            <ListChatDoctor profil={DoctorPria1} name='dr. Mike Andi Nugroho' chat='Pria' type='next'/>
            <ListChatDoctor profil={DoctorPria3} name='dr. Azmi Furqon' chat='Pria' type='next'/>

        </View>
    )
}

export default ChooseDoctor

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white, flex:1
    }
})
