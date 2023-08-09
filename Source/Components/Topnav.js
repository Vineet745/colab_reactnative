import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Homestyle from '../Navigation/bottomnavigation/home/Homestyle'

const Topnav = () => {
  return (
    <View>
      <View style={Homestyle.topnav}>
        <View style={Homestyle.topnavchild}>
        <Image source={require('../assets/Images/Nav-1.png')}/>
        <TouchableOpacity>
        <Image source={require('../assets/Images/nav-2.png')}/>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Topnav