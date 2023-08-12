import { View, Text,TouchableOpacity} from 'react-native'
import React from 'react'
import buttonstyle from './buttonstyle'

const Button = ({firstbutton,secondbutton}) => {
  return (
    <View style={buttonstyle.buttonmain}>
       <TouchableOpacity style={buttonstyle.blackbtn}>
        <Text style={buttonstyle.blackbuttontext}>{firstbutton}</Text>
       </TouchableOpacity>
       <TouchableOpacity style={buttonstyle.yellowbtn}>
        <Text style={buttonstyle.yellowbuttontext}>{secondbutton}</Text>
       </TouchableOpacity>
    </View>
  )
}

export default Button