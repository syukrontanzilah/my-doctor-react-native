import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header, List } from '../../component'
import { Doctor1, Doctor2, Doctor3, Doctor4, DoctorWanita1, DoctorPria1, DoctorWanita2, IconNext, DoctorPria2, DoctorPria3, DoctorWanita5, DoctorWanita6, DoctorWanita3, DoctorWanita7 } from '../../asset'
import { colors } from '../../utils'

const ChooseDoctor = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header type= 'dark' title='Pilih Dokter Umum'
            onPress={()=> navigation.goBack()} />

            <List 
            onPress ={()=> navigation.navigate('Chatting')}
            profil={DoctorWanita7} name='Fii Hawa' chat='Wanita' type= 'next'/>

            <List profil={DoctorWanita2} name='Maissy Pramasella' chat='Wanita' type='next'/>
            <List profil={DoctorPria1} name='dr. Mike Andi Nugroho' chat='Pria' type='next'/>
            <List profil={DoctorPria3} name='dr. Azmi Furqon' chat='Pria' type='next'/>

        </View>
    )
}

export default ChooseDoctor

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white, flex:1
    }
})
