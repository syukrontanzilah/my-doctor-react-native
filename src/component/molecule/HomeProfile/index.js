import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { User2, ILnull, } from '../../../asset'
import { fonts, colors, getData } from '../../../utils'

const HomeProfile = ({ onPress }) => {
    const [profile, setProfile] = useState({
        photo: ILnull,
        fullName: '',
        profesi: '',
    });

    useEffect(() => {
        getData('user').then(res => {
            //console.log('data user: ', res);
            const data = res;
            data.photo = {uri: res.photo}
            console.log('new profile: ', data)
            setProfile(res);

        })
    }, [])
    return (
        <TouchableOpacity style={styles.container}
            onPress={onPress}>
                {/* <View style={{}}>
                    <ILnull style={{}}/>
                </View> */}
                
            <Image style={{
                height: 45,
                width: 45,
                borderRadius: 45 / 2,
                marginRight: 12,
                borderWidth:1,
                borderColor: '#d4d4d4',
                backgroundColor:'#d4d4d4'
                //position:'absolute'
            }}
                source={profile.photo} />

            <View style={{ justifyContent: 'center' }}>
                <Text style={styles.name}>{profile.fullName}</Text>
                <Text style={styles.profesi}>{profile.profesi}</Text>
            </View>
        </TouchableOpacity>




    )
}

export default HomeProfile

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    name: {
        fontSize: 16,
        fontFamily: fonts.primary[800],
        color: colors.text.primary,
        textTransform:'capitalize'

    },
    profesi: {
        fontSize: 13,
        fontFamily: fonts.primary[500],
        color: colors.text.secondary,
        textTransform:'capitalize'
    }
})
