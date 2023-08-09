import { View, Text,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Calendarcomponentstyle from './Calendarcomponentstyle'

const Calendarcomponent = () => {
  return (
    <View style={Calendarcomponentstyle.calendarmain}>
        <View >  
            <Text style={Calendarcomponentstyle.Datetext}>6 June 2023</Text>
        </View>
        <TouchableOpacity>
            <Image source={require('../../assets/Images/blackcalendar.png')}/>
            </TouchableOpacity>
    </View>
  )
}

export default Calendarcomponent