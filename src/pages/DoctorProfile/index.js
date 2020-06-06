import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header, Profile, ProfileItem, Button, Gap } from '../../component'
import { DoctorWanita4, DoctorWanita6, DoctorWanita7 } from '../../asset'
import { colors } from '../../utils'

const DoctorProfile = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header title='Doctor Profile' onPress={()=>navigation.goBack()}/>
            <Profile name='Fii Hawa' desc='Dokter Anak' avatar={DoctorWanita7} />
            <Gap height={10} />

            <ProfileItem label='Alumnus' value='Universitas Indonesia, 2017' />
            <ProfileItem label='Tempat Praktek' value='Rumah Sakit Sekarwangi, Sukabumi' />
            <ProfileItem label='No. STR' value='04802323209' />

           <View style={{paddingHorizontal:30, paddingVertical:30}}>
           <Button title='Start Consultation' 
           onPress={()=> navigation.navigate('Chatting')} />

           </View>

        </View>
    )
}

export default DoctorProfile

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1,
        
    }
})
