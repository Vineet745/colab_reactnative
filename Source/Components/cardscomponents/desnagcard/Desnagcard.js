import {View, Text} from 'react-native';
import React from 'react';
import desnagcardstyle from './desnagcardstyle';
import {verticalScale} from '../../../assets/Dimension';
const Desnagcard = () => {
  return (
    <View style={{marginBottom: verticalScale(15)}}>
      <View style={desnagcardstyle.desnagcard}>
        <View style={desnagcardstyle.workingareaview}>
          <Text style={desnagcardstyle.workingareatext}>
            Tower A/ Ground Floor / U1
          </Text>
        </View>
        <View style={desnagcardstyle.workdetails}>
          <View style={desnagcardstyle.startdatediv}>
            <Text style={desnagcardstyle.workdetailstextone}>9 June 2023</Text>
            <Text style={desnagcardstyle.workdetailstexttwo}>Date</Text>
          </View>
          <View style={desnagcardstyle.centerdiv}>
            <Text style={desnagcardstyle.centerdivtext}>-5</Text>
          </View>
          <View style={desnagcardstyle.enddatediv}>
            <Text style={desnagcardstyle.workdetailstextone}>15 June 2023</Text>
            <Text style={desnagcardstyle.workdetailstexttwo}>Due Date</Text>
          </View>
        </View>
        <View style={desnagcardstyle.creatornamediv}>
          <Text style={desnagcardstyle.creatornametext}>
            Irshad Khan COMP 3
          </Text>
          <Text style={desnagcardstyle.creatornametext2}>Created By</Text>
        </View>
      </View>
    </View>
  );
};

export default Desnagcard;
