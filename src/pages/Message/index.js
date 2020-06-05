import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { List } from '../../component'
import { colors, fonts } from '../../utils'
import { Doctor1, Doctor2, Doctor3 } from '../../asset'

const Message = () => {
   const [doctors,] = useState([
        {
            id:1,
            profil: Doctor1,
            name: 'dr. Alexandra Joanna',
            chat: 'terima kasih bu atas waktunya..'
        },
        {
            id:2,
            profil: Doctor2,
            name: 'dr. Herman Abdullah',
            chat: 'Makasih ya pak dokter ganteng hehe.'
        },
        {
            id:1,
            profil: Doctor3,
            name: 'dr. Muhammad Fikri',
            chat: 'baik dokter akan saya coba..'
        },

    ])
    return (
        <View style={styles.page}>
            <View style={styles.content}>
                <Text style={styles.title}>Messages</Text>
                {
                    doctors.map(doctor => {
                        return <List
                        key={doctor.id} 
                        profil={doctor.profil}
                        name={doctor.name}
                        chat={doctor.chat}/>
                    })
                }
            </View>



        </View>
    )
}

export default Message

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.secondary, flex: 1
    },
    content: {
        backgroundColor: colors.white, flex: 1,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    title: {
        fontSize: 22,
        fontFamily: fonts.primary[800],
        color: colors.text.primary,
        marginTop:25, 
        marginLeft:16,
        marginBottom:10
    }

})
