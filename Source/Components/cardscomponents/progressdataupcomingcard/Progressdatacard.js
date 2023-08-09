import { View, Text } from 'react-native'
import React from 'react'
import progressdatacardstyle from './progressdatacardstyle'
import { moderateScale, verticalScale } from '../../../assets/Dimension'

const Progressdatacard = () => {
  return (
    <View style={{marginBottom: verticalScale(15)}}>
      <View style={progressdatacardstyle.desnagcard}>
      <View style={progressdatacardstyle.workdetail}>
        <View style={progressdatacardstyle.workareadetail}>
            <Text style={progressdatacardstyle.workareadetailtext}>Tower A/Ground Floor / Unit 1</Text>
        </View>
        <View style={progressdatacardstyle.workingprogressdetail}>
            <Text style={progressdatacardstyle.workingprogressdetailtext}>Column Shuttering</Text>
        </View>
     </View>
        <View style={progressdatacardstyle.workdetails}>
          <View style={progressdatacardstyle.startdatediv}>
            <Text style={progressdatacardstyle.workdetailstextone}>9 June 2023</Text>
            <Text style={progressdatacardstyle.workdetailstexttwo}>Planned Start</Text>
          </View>
          <View style={progressdatacardstyle.centerdiv}>
            <Text style={progressdatacardstyle.centerdivtext}>17</Text>
          </View>
          <View style={progressdatacardstyle.enddatediv}>
            <Text style={progressdatacardstyle.workdetailstextone}>20 June 2023</Text>
            <Text style={progressdatacardstyle.workdetailstexttwo}>Planned Start</Text>
          </View>
        </View>
        <View style={progressdatacardstyle.creatornamediv}>
            <View style={{padding:moderateScale(8),borderRadius:10,backgroundColor:"#ebedf2"}}>
          <Text style={progressdatacardstyle.creatornametext}>
            No Checklist Available
          </Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Progressdatacard;