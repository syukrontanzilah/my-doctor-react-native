import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header, List } from '../../component'
import { Doctor1, Doctor2, Doctor3, Doctor4, DoctorWanita1, DoctorPria1, DoctorWanita2, IconNext, DoctorPria2, DoctorPria3, DoctorWanita5, DoctorWanita6, DoctorWanita3, DoctorWanita7 } from '../../asset'
import { colors } from '../../utils'
import { Fire } from '../../config'

const ChooseDoctor = ({ navigation, route }) => {
    const [listDoctor, setListDoctor] = useState([])
    const itemCategory = route.params;
    useEffect(() => {
        callDoctorByCategory(itemCategory.category)
    }, [])

    callDoctorByCategory = (category) => {
        Fire.database()
            .ref('doctors/').orderByChild('category')
            .equalTo(category)
            .once('value')
            .then(res => {
                // parsing data
                if (res.val()) {
                    const oldData = res.val();
                    const data = []
                    Object.keys(oldData).map(item => {
                        data.push({
                            id: item,
                            data: oldData[item]
                        })
                    })
                    setListDoctor(data)
                }

            })
    }
    return (
        <View style={styles.page}>
            <Header
                type='dark'
                title={`Pilih ${itemCategory.category}`}
                onPress={() => navigation.goBack()} />

            {
                listDoctor.map(doctor => {
                    return <List
                        key={doctor.id}
                        onPress={() => navigation.navigate('Chatting')}
                        profil={{ uri: doctor.data.photo }}
                        name={doctor.data.fullName}
                        chat={doctor.data.gender} type='next' />

                })
            }


            {/* <List profil={DoctorWanita2} name='Maissy Pramasella' chat='Wanita' type='next' />
            <List profil={DoctorPria1} name='dr. Mike Andi Nugroho' chat='Pria' type='next' />
            <List profil={DoctorPria3} name='dr. Azmi Furqon' chat='Pria' type='next' /> */}

        </View>
    )
}

export default ChooseDoctor

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white, flex: 1
    }
})
