import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Areaofconcerncard from '../../../Components/cardscomponents/areaofconcercard/Areaofconcerncard'
import { horizontalScale, verticalScale } from '../../../assets/Dimension'
import { TouchableOpacity,Image } from 'react-native'
import Additionbtn from '../../../Components/cardscomponents/areaofconcercard/Additionbtn'

const Pending = () => {
  return (
    <View style={{flex:1,paddingHorizontal:horizontalScale(15),paddingVertical:verticalScale(15),backgroundColor:"#fbfbfb"}}>
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

export default Pending