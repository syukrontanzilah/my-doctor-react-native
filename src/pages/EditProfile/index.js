import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { Header, Profile, Input, Button, Gap } from '../../component'
import { colors } from '../../utils'

const EditProfile = () => {
    return (
        <View style={styles.page}>
            <Header title='Edit Profile' />

            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.content}>
                <Profile remove/>
                <Gap height={24} />

                <Input label='Full Name' />
                <Gap height={24} />
                <Input label='Pekerjaan' />
                <Gap height={24} />
                <Input label='Email' />
                <Gap height={24} />
                <Input label='Password' />
                <Gap height={40} />
                <View style={{ paddingBottom: 20 }}>
                    <Button title="Save Profile" />
                </View>


            </ScrollView>


        </View>
    )
}

export default EditProfile

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1
    },
    content: {
        padding: 40,
        paddingTop: 0
    }
})
