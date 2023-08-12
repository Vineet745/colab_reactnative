import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import hindrancecardstyle from './hindrancecardstyle'
import { verticalScale } from '../../../assets/Dimension'
import { useNavigation } from '@react-navigation/native'

const Hindrancecard = () => {
  const {navigate} = useNavigation()
  return (
    <View style={{marginBottom: verticalScale(15)}}>
      <TouchableOpacity onPress={()=>navigate('homestack',{screen:'Hindrance Details'})}>
      <View style={hindrancecardstyle.desnagcard}>
        <View style={hindrancecardstyle.workingareaview}>
          <Text style={hindrancecardstyle.workingareatext}>
            Approval
          </Text>
        </View>
        <View style={hindrancecardstyle.workdetails}>
          <View style={hindrancecardstyle.startdatediv}>
            <Text style={hindrancecardstyle.workdetailstextone}>9 June 2023</Text>
            <Text style={hindrancecardstyle.workdetailstexttwo}>Working Completion Date</Text>
          </View>
          <View style={hindrancecardstyle.centerdiv}>
            <Text style={hindrancecardstyle.centerdivtext}>17</Text>
          </View>
          <View style={hindrancecardstyle.enddatediv}>
            <Text style={hindrancecardstyle.workdetailstextone}>20 June 2023</Text>
            <Text style={hindrancecardstyle.workdetailstexttwo}>Close Date</Text>
          </View>
        </View>
        <View style={hindrancecardstyle.creatornamediv}>
          <Text style={hindrancecardstyle.creatornametext}>
            Cost Impact
          </Text>
          <Text style={hindrancecardstyle.creatornametext2}>2000</Text>
        </View>
      </View>
      </TouchableOpacity>
    </View>
  )
}

export default Hindrancecard