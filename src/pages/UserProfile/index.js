import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Header, Profile, List, Gap} from '../../component'
import { colors } from '../../utils'
import { User2 } from '../../asset'


const UserProfile = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header title ='Profile'
            onPress={()=>navigation.goBack()} />
            <Gap height={10}/>
            <Profile name='Ana Musytaq Yahabibi' desc='finance Officer'
            avatar={User2}/>
            <Gap height={15}/>
         

            <List 
            onPress={()=> navigation.navigate('EditProfile')}
            name='Edit Profile' 
            chat='Last update Yesterday' 
            type='next' 
            icon='edit-profile'/>

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
