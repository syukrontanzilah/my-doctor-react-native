import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Header, Button, Link, Gap } from '../../component'
import { ILnull, ILLogo } from '../../asset'
import { colors, fonts } from '../../utils'

const UploadFoto = ({navigation}) => {
    return (
        <View style={{ flex: 1, backgroundColor: 'white', }}>
            <Header title='Upload Photo' />

            <View style={{ justifyContent: 'space-between', flex:1, paddingHorizontal:40, paddingBottom:40, paddingTop:50  }}>

                <View style={{ justifyContent:'center', alignItems:'center' }}>
                    {/* photo profil */}
                    <View style={{ height: 120, width: 120 }}>
                        <View style={{
                            height: 120,
                            width: 120,
                            borderRadius: 100, backgroundColor: 'lightgray',
                            opacity: 0.5,
                            justifyContent: 'center', alignItems: 'center'
                        }}>
                            <Image style={{ height: 100, width: 100, opacity: 0.5 }} source={require('../../asset/icon/user1.png')} />
                        </View>
                        <Image style={{ height: 40, width: 40, opacity: 0.3, position: 'absolute', bottom: 8, right: 6, backgroundColor: 'darkblue', borderRadius: 100 }} source={require('../../asset/icon/add.png')} />
                    </View>

                    <Text style={styles.name}>Syukron Tanzilah</Text>
                    <Text style={styles.profesi}>Mobile Developer</Text>
                </View>

                <View style={{ justifyContent:'center', }}>
                    <Button title='Upload and Continue' 
                      onPress={()=> navigation.replace('MainApp')}/>
                    <Gap height={30} />
                    <Link title='Skip for this' align='center' size={16} 
                    onPress={()=> navigation.replace('MainApp')} />
                </View>
            </View>


        </View>
    )
}

export default UploadFoto

const styles = StyleSheet.create({
    name: {
        fontSize: 24,
        color: colors.text.primary,
        fontFamily: fonts.primary[800],
        textAlign: 'center',
        marginTop:20,
        opacity:0.7
    },
    profesi: {
        fontSize: 16,
        fontFamily: fonts.primary[300],
        textAlign: 'center',
        color: colors.text.secondary,
        marginTop: 8

    }
})
