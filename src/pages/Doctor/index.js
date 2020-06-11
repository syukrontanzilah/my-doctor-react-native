import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { HomeProfile, DoktorKategori, RatingDoctor, NewsItem, Gap } from '../../component'
import { fonts, colors, getData, showError } from '../../utils'
import { Fire } from '../../config'

const Doctor = ({ navigation }) => {
    const [news, setNews] = useState([]);
    const [categoryDoctor, setCategoryDoctor] = useState([])
    const [doctors, setDoctors] = useState([])

    useEffect(() => {
        getCategoryDoctor();
        getTopRatedDoctor()
        getNews();
    }, [])



    //nampilin top rating dokter
    const getTopRatedDoctor = () => {
        Fire.database()
            .ref('doctors/')
            //query urukan berdasarkan rating max 3
            .orderByChild('rate')
            .limitToLast(4)
            .once('value')
            .then(res => {
                console.log('top rated doctor: ', res.val());
                if (res.val()) {
                    const oldData = res.val()
                    const data = [];
                    Object.keys(oldData).map(key => {
                        data.push({
                            id: key,
                            data: oldData[key]
                        });
                    });
                    setDoctors(data)
                }
            })
            .catch(err => {
                showError(err.message)
            })

    }

    //firebase kategori dokter
    const getCategoryDoctor = () => {
        Fire.database()
            .ref('category_doc/')
            .once('value')
            .then(res => {
                console.log('category doctor: ', res.val());
                if (res.val()) {
                    const data = res.val();
                    const filterData = data.filter(el => el !== null)
                    setCategoryDoctor(filterData)
                }
            })
            .catch(err => {
                showError(err.message)
            })
    }

    //firebase news
    const getNews = () => {
        Fire.database()
            .ref('news/')
            .once('value')
            .then(res => {
                console.log('data: ', res.val());
                if (res.val()) {
                    const data = res.val();
                    const filterData = data.filter(el => el !== null)
                    setNews(filterData)
                }
            })
            .catch(err => {
                showError(err.message)
            })
    }

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
                                            onPress={() => navigation.navigate('ChooseDoctor', item)} />
                                    })
                                }

                                <Gap width={22} />

                            </View>
                            <Gap height={30} />
                        </ScrollView>
                    </View>



                    <View style={{ paddingHorizontal: 16 }}>
                        <Text style={styles.sectionLabel}>Top Rating dokter</Text>

                        {
                            doctors.map(doctor => {
                                return <RatingDoctor
                                    key={doctor.id}
                                    name={doctor.data.fullName}
                                    desc={doctor.data.profesi}
                                    avatar={{ uri: doctor.data.photo }}
                                    onPress={() => navigation.navigate('DoctorProfile', doctor)} /> })
                        }
{/* 
                        <RatingDoctor
                            name='Fii Hawa'
                            desc='Dokter Gigi'
                            avatar={DoctorWanita7}
                            onPress={() => navigation.navigate('DoctorProfile')} /> */}


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

