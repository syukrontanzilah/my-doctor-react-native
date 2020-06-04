import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { HomeProfile, DoktorKategori, RatingDoctor, NewsItem, Gap } from '../../component'
import { fonts, colors } from '../../utils'

const Doctor = () => {
    return (
        <View style={styles.page}>
            <View style={styles.content}>
                <ScrollView
                    showsVerticalScrollIndicator={false}>
                    <Gap height={30} />
                    <View style={{paddingHorizontal:16}}>
                       <HomeProfile />
                    <Text style={styles.welcome}>Mau Konsultasi dengan siapa hari ini?</Text>
                    </View>
                 
                    <View style={{ marginHorizontal: -16 }}>
                        <ScrollView horizontal
                            showsHorizontalScrollIndicator={false} >
                            <View style={styles.doctorCategory}>
                                <Gap width={32} />
                                <DoktorKategori />
                                <DoktorKategori />
                                <DoktorKategori />
                                <DoktorKategori />
                                <DoktorKategori />
                                <Gap width={22} />

                            </View>
                            <Gap height={30} />
                        </ScrollView>
                    </View>



                    <View style={{ paddingHorizontal: 16 }}>
                        <Text style={styles.sectionLabel}>Top Rating dokter</Text>
                        <RatingDoctor />
                        <RatingDoctor />
                        <RatingDoctor />
                    </View>

                    <View style={{paddingHorizontal:16}}>
                        <Text style={styles.sectionLabel}>Good News</Text>
                        <NewsItem />
                        <NewsItem />
                        <NewsItem />
                    </View>


                </ScrollView>
            </View>
        </View>
    )
}

export default Doctor

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.secondary,
        flex: 1
    },
    content: {
        backgroundColor: colors.white, flex: 1,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    welcome: {
        fontSize: 20,
        fontFamily: fonts.primary[800],
        color: colors.text.primary, marginTop: 30, marginBottom: 10,
        maxWidth: 209,
    },
    doctorCategory: {
        flexDirection: 'row'
    },
    sectionLabel: {
        fontSize: 16, fontFamily: fonts.primary[800],
        color: colors.text.primary,
        marginTop: 30,
        marginBottom: 16
    }
})
