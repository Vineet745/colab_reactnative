import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { moderateScale } from '../../../assets/Dimension'
import { useNavigation } from '@react-navigation/native'

const Additionbtn = () => {
    const {navigate} = useNavigation()
  return (
    <TouchableOpacity onPress={()=>navigate('homestack',{screen:"AreaofConcern"})} style={{position:"absolute",bottom:moderateScale(40),right:moderateScale(30)}}>
        <Image style={{width:55,height:55}}  source={require('../../../assets/Images/Add-bottom.png')}/>
        </TouchableOpacity>
  )
}

export default Additionbtn