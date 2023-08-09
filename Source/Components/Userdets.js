import { View, Text, Image } from 'react-native'
import React from 'react'
import Homestyle from '../Navigation/bottomnavigation/home/Homestyle'

const Userdets = () => {
  return (
  
    <View style={Homestyle.Userinfo}>
        <View style={Homestyle.usertext}>
        <Text style={Homestyle.usertextone}>Hi, The Lake Admin</Text>
        <Text style={Homestyle.usertexttwo}>Last Sync - 6 Jan 2023</Text>
        </View>
        <View style={Homestyle.userlogo}>
             <Image source={require('../assets/Images/User-Logo.png')}/>
        </View>
      </View>
  )
}

export default Userdets