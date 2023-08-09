import { View, Text, ScrollView, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { horizontalScale, verticalScale } from '../../../assets/Dimension'
import Areaofconcerncard from '../../../Components/cardscomponents/areaofconcercard/Areaofconcerncard'
import Additionbtn from '../../../Components/cardscomponents/areaofconcercard/Additionbtn'

const Approved = () => {
  return (
    <View style={{flex:1,marginTop:verticalScale(15),paddingHorizontal:horizontalScale(15),paddingVertical:verticalScale(10)}}>
    <ScrollView showsVerticalScrollIndicator={false} >
    <Areaofconcerncard/>
    <Areaofconcerncard/>
    <Areaofconcerncard/>
    <Areaofconcerncard/>
    <Areaofconcerncard/>
    <Areaofconcerncard/>
    </ScrollView>
    <View>
      <Additionbtn/>
    </View>
</View>
  )
}

export default Approved