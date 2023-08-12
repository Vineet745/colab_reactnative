import { View, Text, ScrollView,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { horizontalScale, moderateScale, verticalScale } from '../../../assets/Dimension'
import Areaofconcerncard from '../../../Components/cardscomponents/areaofconcercard/Areaofconcerncard'
import { Screen } from 'react-native-screens'
import Areaofconcern from '../../cardsrouter/areaofconcern/Areaofconcern'
import { useNavigation } from '@react-navigation/native'
import Additionbtn from '../../../Components/cardscomponents/areaofconcercard/Additionbtn'

const Read = () => {
    const {navigate} = useNavigation()
  return (
    <View style={{flex:1,paddingHorizontal:horizontalScale(15),paddingVertical:verticalScale(15),backgroundColor:"#fbfbfb"}}>
        <ScrollView showsVerticalScrollIndicator={false} >
        <Areaofconcerncard/>
        <Areaofconcerncard/>
        <Areaofconcerncard/>
        <Areaofconcerncard/>
        <Areaofconcerncard/>
        <Areaofconcerncard/>
        </ScrollView >
        <View>
          <Additionbtn/>
        </View>
    </View>
  )
}

export default Read