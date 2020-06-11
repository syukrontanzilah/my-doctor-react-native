import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header, Profile, ProfileItem, Button, Gap } from '../../component'
import { DoctorWanita4, DoctorWanita6, DoctorWanita7 } from '../../asset'
import { colors } from '../../utils'

const DoctorProfile = ({navigation, route}) => {
    const dataDoctor = route.params;
    return (
        <View style={styles.page}>
            <Header title='Doctor Profile' onPress={()=>navigation.goBack()}/>
            <Profile name={dataDoctor.data.fullName} desc={dataDoctor.data.profesi} photo ={{uri: dataDoctor.data.photo}} />
            <Gap height={10} />

            <ProfileItem label='Alumnus' value={dataDoctor.data.university} />
            <ProfileItem label='Tempat Praktek' value={dataDoctor.data.hospital_address} />
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
