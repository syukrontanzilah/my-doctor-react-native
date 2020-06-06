import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, ScrollView } from 'react-native'
import { fonts, colors } from '../../utils'
import ListHospital from '../../component/molecule/ListHospital'
import { Gap } from '../../component'
import { Hospital1, Hospital2, Hospital3, } from '../../asset'


const Hospital = () => {
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

                <ListHospital 
                type='Rumah Sakit'
                pict={Hospital1}
                name='Kebagusan'
                address ='Jl. Kehampaan Hati yang telah tersakiti karena telah kau lukai, Kota Jakarta Barat' />
                
                <ListHospital 
                type='Rumah Sakit Jantung'
                pict={Hospital2}
                name ='Sahabat Jantung'
                address ='Jl. Kehangatan cinta yang telah kau beri telah membuatku kangen, Kota Jakarta Timur'  />
                
                <ListHospital 
                type='Rumah Sakit Jiwa'
                name='Kasih Hati'
                pict={Hospital3}
                address ='Jl. Kenangan indah ini selalu teringat dan tak pernah kulupa, Jakarta Pusat'  />
                
                <ListHospital 
                type='Rumah Sakit' 
                name='Harapan Bunda'
                pict={Hospital1}
                address ='Jl. Kehampaan Hati yang telah tersakiti karena telah kau lukai, Kota Jakarta Barat' />
                
          
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
