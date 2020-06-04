import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'
import { fonts, colors } from '../../utils'
import ListHospital from '../../component/molecule/ListHospital'

const Hospital = () => {
    return (
        <View style={styles.page}>
            {/* <ImageBackground >

           </ImageBackground> */}
            <View style={{ height: 240, }}>
                <Image style={{ height: undefined, width: undefined, flex: 1, resizeMode: 'cover', opacity: 0.5 }} source={require('../../asset/dummy/hospital4.jpg')} />
                <View style={{ position: 'absolute', top: 25, alignItems: 'center', alignSelf: 'center' }}>
                    <Text style={styles.title}>Nearby Hospital</Text>
                    <Text style={styles.tersedia}>3 Tersedia</Text>
                </View>
            </View>


            <View style={styles.content}>
                <ListHospital/>
                <ListHospital/>
                <ListHospital/>

            </View>

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
        marginTop: -30,
        paddingTop:14


    }

})
