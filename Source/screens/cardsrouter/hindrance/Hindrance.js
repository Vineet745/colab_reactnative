import { View, Text,ScrollView,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import Hindrancecard from '../../../Components/cardscomponents/hindrancecard/Hindrancecard'
import { horizontalScale, moderateScale, verticalScale } from '../../../assets/Dimension'
import { useNavigation } from '@react-navigation/native'

const Hindrance = () => {
  const {navigate} = useNavigation()

  return (
    <View style={{flex:1,paddingVertical:verticalScale(15),paddingHorizontal:horizontalScale(22)}}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <Hindrancecard/>
        <Hindrancecard/>
        <Hindrancecard/>
        <Hindrancecard/>
        <Hindrancecard/>
        </ScrollView>

        {/* Addition Button */}

        <TouchableOpacity onPress={()=>navigate('homestack',{screen:"Add Hindrance"})} style={{position:"absolute",bottom:moderateScale(40),right:moderateScale(30)}}>
        <Image style={{width:55,height:55}}  source={require('../../../assets/Images/Add-bottom.png')}/>
        </TouchableOpacity>
    </View>
  )
}

export default Hindrance