import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, ScrollView } from 'react-native'
import { fonts, colors, showError } from '../../utils'
import ListHospital from '../../component/molecule/ListHospital'
import { Gap } from '../../component'
import { Hospital1, Hospital2, Hospital3, } from '../../asset'
import { Fire } from '../../config'


const Hospital = () => {
    const [hospital, setHospital] = useState([]);
    useEffect(() => {
        Fire.database().ref('hospital/')
            .once('value')
            .then(res => {
                if (res.val()) {
                    setHospital(res.val());
                }
            })
            .catch(err => {
                showError(err.message);
            })
    })
    return (
        <View style={styles.page}>
            {/* <ImageBackground >

           </ImageBackground> */}
            <View style={{ height: 240, }}>
                <Image style={{ height: undefined, width: undefined, flex: 1, resizeMode: 'cover', opacity: 0.5 }} source={require('../../asset/dummy/hospital4.jpg')} />
                <View style={{ position: 'absolute', top: 25, alignItems: 'center', alignSelf: 'center' }}>
                    {/* <Text style={styles.titlearab}>وَ نُنَزِّلُ مِنَ القُرْآنِ مَا هُوَ شِفَاءٌ وَ رَحْمَةٌ لِلْمُؤْمِنِيْنَ</Text> */}
                    <Text style={styles.title}>Nearby Hospital</Text>
                    <Text style={styles.tersedia}>3 Tersedia</Text>
                </View>
            </View>


            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.content}>

                {hospital.map(item => {
                    return (
                        <ListHospital
                        type ={item.type}
                        title ={item.title}
                        address ={item.address}
                        image ={item.image}
                        />
                    )
                })}

                {/* <ListHospital
                    type='Rumah Sakit'
                    image={Hospital1}
                    title='Kebagusan'
                    address='Jl. Kehampaan Hati yang telah tersakiti karena telah kau lukai, Kota Jakarta Barat' />

                <ListHospital
                    type='Rumah Sakit Jantung'
                    image={Hospital2}
                    title='Sahabat Jantung'
                    address='Jl. Kehangatan cinta yang telah kau beri telah membuatku kangen, Kota Jakarta Timur' /> */}



                <Gap height={100} />
            </ScrollView>

        </View>
    )
}

export default Hospital

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.secondary, flex: 1
    },
    title: {
        fontSize: 20,
        fontFamily: fonts.primary[800],
        color: 'lightyellow'
    },
    tersedia: {
        color: 'lightgreen',
        fontSize: 16,
        fontFamily: fonts.primary[500]
    },
    content: {
        backgroundColor: colors.white,
        flex: 1,
        borderRadius: 20,
        marginTop: -80,
        paddingTop: 14,

    },
    titlearab: {
        fontSize: 30,
        fontFamily: 'A_Nefel_Adeti',
        color: 'lightyellow'
    }

})
