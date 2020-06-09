import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { HomeProfile, DoktorKategori, RatingDoctor, NewsItem, Gap } from '../../component'
import { fonts, colors, getData, showError } from '../../utils'
import { JSONCategoryDoctor, DoctorWanita1, DoctorWanita2, DoctorWanita3, DoctorWanita4, DoctorWanita5, DoctorWanita6, DoctorWanita7, Doctor1, DoctorPria1, DoctorPria2, DoctorPria3, DoctorPria4, DoctorPria5, DoctorPria6 } from '../../asset'
import { Fire } from '../../config'

const Doctor = ({ navigation }) => {
    const [news, setNews] = useState([]);
    const [categoryDoctor, setCategoryDoctor] = useState([])

    useEffect(() => {
        //firebase news
        Fire.database()
            .ref('news/')
            .once('value')
            .then(res => {
                console.log('data: ', res.val());
                if (res.val()) {
                    setNews(res.val())
                }
            })
            .catch(err => {
                showError(err.message)
            })
        //firebase kategori dokter
        Fire.database()
            .ref('category_doc/')
            .once('value')
            .then(res => {
                console.log('category doctor: ', res.val());
                if (res.val()) {
                    setCategoryDoctor(res.val())
                }
            })
            .catch(err => {
                showError(err.message)
            })


    }, [])

    return (
        <View style={styles.page}>
            <View style={styles.content}>
                <ScrollView
                    showsVerticalScrollIndicator={false}>
                    <Gap height={20} />
                    <View style={{ paddingHorizontal: 16 }}>
                        <HomeProfile onPress={() => navigation.navigate('UserProfile')} />
                    </View>


                    <View style={{ paddingHorizontal: 16 }}>
                        <Text style={styles.welcome}>Mau Konsultasi dengan siapa hari ini?</Text>
                    </View>

                    <View style={{ marginHorizontal: -16 }}>
                        <ScrollView horizontal
                            showsHorizontalScrollIndicator={false} >
                            <View style={styles.doctorCategory}>
                                <Gap width={32} />
                                {
                                    categoryDoctor.map(item => {
                                        return <DoktorKategori
                                            key={item.id}
                                            category={item.category}
                                            onPress={() => navigation.navigate('ChooseDoctor')} />
                                    })
                                }

                                <Gap width={22} />

                            </View>
                            <Gap height={30} />
                        </ScrollView>
                    </View>



                    <View style={{ paddingHorizontal: 16 }}>
                        <Text style={styles.sectionLabel}>Top Rating dokter</Text>
                        <RatingDoctor
                            name='Fii Hawa'
                            desc='Dokter Gigi'
                            avatar={DoctorWanita7}
                            onPress={() => navigation.navigate('DoctorProfile')} />

                        <RatingDoctor
                            name='Aini Lighoiri Jamalikum'
                            desc='Dokter Anak'
                            avatar={DoctorWanita4} />

                        <RatingDoctor
                            name='Tanzil Mushohabaturrijal'
                            desc='Dokter Specialist Hati'
                            avatar={DoctorPria3} />
                    </View>

                    <View style={{ paddingHorizontal: 16 }}>
                        <Text style={styles.sectionLabel}>Good News</Text>

                        {news.map(item => {
                            return (
                                <NewsItem
                                    key={item.id}
                                    title={item.title}
                                    date={item.date}
                                    image={item.image} />
                            )
                        })}

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
        backgroundColor: colors.white,
        flex: 1,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    welcome: {
        fontSize: 20,
        fontFamily: fonts.primary[800],
        color: colors.text.primary,
        marginTop: 30,
        marginBottom: 10,
        maxWidth: 209,
    },
    doctorCategory: {
        flexDirection: 'row',
    },
    sectionLabel: {
        fontSize: 16,
        fontFamily: fonts.primary[800],
        color: colors.text.primary,
        marginTop: 30,
        marginBottom: 16
    }
})

