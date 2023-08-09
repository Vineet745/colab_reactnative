import { View, Text } from 'react-native'
import React from 'react'
import hindrancecardstyle from './hindrancecardstyle'
import { verticalScale } from '../../../assets/Dimension'

const Hindrancecard = () => {
  return (
    <View style={{marginBottom: verticalScale(15)}}>
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
    </View>
  )
}

export default Hindrancecard