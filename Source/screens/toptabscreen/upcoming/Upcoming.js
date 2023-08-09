import { View, Text,ScrollView } from 'react-native'
import React from 'react'
import { cardcompsheetstyle } from '../../../Components/cardscomponents/siteprogress/cardcompsheet'
import { horizontalScale, moderateScale, verticalScale } from '../../../assets/Dimension'
import Searchbar from '../../../utils/Searchbar'
import Progressdatacard from '../../../Components/cardscomponents/progressdataupcomingcard/Progressdatacard'

const Upcoming = () => {
  return (
    <View style={{flex:1,marginTop:verticalScale(15),padding:moderateScale(20),backgroundColor:"#f4f6f8"}}>
    <Searchbar/>
    <ScrollView showsVerticalScrollIndicator={false}>
      <Progressdatacard/>
      <Progressdatacard/>
      <Progressdatacard/>
  </ScrollView>
  </View>

  )
}

export default Upcoming