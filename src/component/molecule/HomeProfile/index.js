import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { User2, } from '../../../asset'
import {fonts, colors} from '../../../utils'

const HomeProfile = () => {
    return (
        <View style={styles.container}>
            <Image style={{
                height: 46,
                width: 46,
                backgroundColor: 'gray',
                borderRadius: 46 / 2,
                marginRight:12
            }}
                source={User2} />

            <View style={{}}>
                <Text style={styles.name}>Zulaikha Alfikriah</Text>
                <Text style={styles.profesi}>Finance Officer</Text>
            </View>


        </View>
    )
}

export default HomeProfile

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'

    },
    name: {
        fontSize:16,
        fontFamily: fonts.primary[800],
        color: colors.text.primary

    },
    profesi: {
        fontSize:13,
        fontFamily: fonts.primary[500],
        color: colors.text.secondary
    }
})
