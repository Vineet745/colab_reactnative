import { View, Text,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import camerastyle from './camerastyle'
import { moderateScale } from '../../../assets/Dimension'

const Camera = () => {
  return (
      <TouchableOpacity>
            <View style={camerastyle.cameramain}>
        <Image source={require('../../../assets/Images/Camera.png')}/>
        <View style={camerastyle.textholder}>
            <Text style={{fontFamily:"Geologica-SemiBold",fontSize:moderateScale(12),color:"black"}}>Upload Image</Text>
        </View>
    </View>
        </TouchableOpacity>
  )
}

export default Camera