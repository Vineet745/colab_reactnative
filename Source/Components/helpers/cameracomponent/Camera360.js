import { View, Text,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import camera360style from './Camera360style'
import { moderateScale } from '../../../assets/Dimension'

const Camera360 = () => {
  return (
      <TouchableOpacity>
            <View style={camera360style.cameramain}>
        <Image source={require('../../../assets/Images/card-9.png')}/>
        <View style={camera360style.textholder}>
            <Text style={{fontFamily:"Geologica-SemiBold",fontSize:moderateScale(12),color:"black"}}>Upload 360 Image</Text>
        </View>
    </View>
        </TouchableOpacity>
  )
}

export default Camera360