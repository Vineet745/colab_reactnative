import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Searchbar from '../../../utils/Searchbar'
import Cardcomponent from '../../../Components/cardscomponents/siteprogress/Cardcomponent'
import { moderateScale, verticalScale } from '../../../assets/Dimension'

const Ongoing = () => {
  return (
    <View style={{flex:1,marginTop:verticalScale(15),padding:moderateScale(20),backgroundColor:"white"}}>
    <Searchbar/>
    <ScrollView showsVerticalScrollIndicator={false}>
    <Cardcomponent/>
    <Cardcomponent/>
    <Cardcomponent/>
    <Cardcomponent/>
    <Cardcomponent/>
    <Cardcomponent/>
    <Cardcomponent/>
  </ScrollView>
  </View>
  )
}

export default Ongoing