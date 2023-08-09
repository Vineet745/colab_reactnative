import { View, Text,ScrollView } from 'react-native'
import React from 'react'
import Hindrancecard from '../../../Components/cardscomponents/hindrancecard/Hindrancecard'
import { horizontalScale, verticalScale } from '../../../assets/Dimension'

const Hindrance = () => {
  return (
    <View style={{flex:1,paddingVertical:verticalScale(15),paddingHorizontal:horizontalScale(22)}}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <Hindrancecard/>
        <Hindrancecard/>
        <Hindrancecard/>
        <Hindrancecard/>
        <Hindrancecard/>
        </ScrollView>
    </View>
  )
}

export default Hindrance