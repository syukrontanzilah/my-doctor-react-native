import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header, List } from '../../component'
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
                        onPress={() => navigation.navigate('DoctorProfile', doctor)}
                        profil={{ uri: doctor.data.photo }}
                        name={doctor.data.fullName}
                        chat={doctor.data.gender} type='next' />
                })
            }
        </View>
    )
}

export default ChooseDoctor

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white, flex: 1
    }
})
