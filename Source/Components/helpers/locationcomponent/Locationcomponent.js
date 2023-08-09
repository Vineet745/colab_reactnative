import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import locationcomponentstyle from './locationcomponentstyle'

const Locationcomponent = ({title,togglebutton}) => {
  return (
    <TouchableOpacity
          onPress={()=>togglebutton()}
            style={locationcomponentstyle.dropdownone}>
            <Text style={locationcomponentstyle.dropingtext}>
                {title}
            </Text>
            <Image
              source={require('../../../assets/Images/dropdownlist.png')}
            />
          </TouchableOpacity>
  )
}

export default Locationcomponent




