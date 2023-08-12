import { View, Text,TextInput } from 'react-native'
import React from 'react'
import remarkcomponentstyle from './remarkcomponentstyle'
import { verticalScale } from '../../../assets/Dimension'

const Remarkcomponent = ({title,placeholder}) => {
  return (
    <View style={remarkcomponentstyle.remarkmain}>
        <View style={remarkcomponentstyle.textholder}>
            <Text style={remarkcomponentstyle.text}>{title}</Text>
        </View>
        <View style={remarkcomponentstyle.inputholder}>
        <TextInput  placeholderTextColor="gray" placeholder={placeholder} style={{fontFamily:"Geologica-Medium"}} multiline={true} numberOfLines={4} />
        </View>
    </View>
  )
}

export default Remarkcomponent