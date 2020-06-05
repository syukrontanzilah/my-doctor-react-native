import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Header, Profile, List, Gap} from '../../component'
import { colors } from '../../utils'


const UserProfile = () => {
    return (
        <View style={styles.page}>
            <Header title ='Profile' />
            <Gap height={10}/>
            <Profile/>
            <Gap height={15}/>
         

            <List name='Edit Profile' chat='Last update Yesterday' type='next' icon='edit-profile'/>
            <List name='Language' chat='Last update Yesterday' type='next' icon='language'/>
            <List name='Help' chat='Last update Yesterday' type='next' icon='help'/>
            <List name='Rate' chat='Last update Yesterday' type='next' icon='rate'/>

            
        </View>
        
    )
}

export default UserProfile

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex:1,
        paddingHorizontal:10
    }
})
