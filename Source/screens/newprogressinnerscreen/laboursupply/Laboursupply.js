import { View, Text } from 'react-native'
import React from 'react'
import { horizontalScale, verticalScale } from '../../../assets/Dimension'
import Locationcomponent from '../../../Components/helpers/locationcomponent/Locationcomponent'
import Progresscard from '../../../Components/helpers/progresscard/Progresscard'

const Laboursupply = ({togglebutton,title}) => {
  return (
    <View style={{flex:1,paddingHorizontal:horizontalScale(15),paddingVertical:verticalScale(10),backgroundColor:"#f3f5f8"}}>
      <Locationcomponent togglebutton={togglebutton} title='Select Location'/>
      <Locationcomponent togglebutton={togglebutton}  title='Select Activity Head'/> 
      <Progresscard />    
    </View>
  )
}

export default Laboursupply