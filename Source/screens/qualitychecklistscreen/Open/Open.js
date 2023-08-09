import { View, Text } from 'react-native'
import React from 'react'
import Qualitychecklistcard from '../../../Components/cardscomponents/qualitychecklistcard/Qualitychecklistcard'
import { horizontalScale, verticalScale } from '../../../assets/Dimension'
import { ScrollView } from 'react-native'

const Open = () => {
  return (
    <View style={{paddingHorizontal:horizontalScale(20),paddingVertical:verticalScale(10)}}>
      
      <ScrollView showsVerticalScrollIndicator={false}>
      <Qualitychecklistcard/>
      <Qualitychecklistcard/>
      <Qualitychecklistcard/>
      </ScrollView>
    </View>
  )
}

export default Open