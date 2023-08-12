import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {horizontalScale, verticalScale} from '../../../../assets/Dimension';
import Areaofconcernstyle from './Areaofconcernstyle';
import Remarkcomponent from '../../../../Components/helpers/remarkcomponent/Remarkcomponent';

const Areaofconcerndetail = () => {
  return (
    <View
      style={{
        paddingVertical: verticalScale(10),
        paddingHorizontal: horizontalScale(15),
      }}>
      <View style={Areaofconcernstyle.towermain}>
        <View>
          <Text style={Areaofconcernstyle.towermaintextone}>
            Tower A / Ground Floor / Unit 1
          </Text>
          <Text style={Areaofconcernstyle.towermaintexttwo}>Location</Text>
        </View>
        <View style={{marginTop: verticalScale(10)}}>
          <Text style={Areaofconcernstyle.towermaintextone}>
            Column Shuttering
          </Text>
          <Text style={Areaofconcernstyle.towermaintexttwo}>Activity</Text>
        </View>
      </View>

      <View style={Areaofconcernstyle.status}>
        <View>
          <Text style={{fontFamily: 'Geologica-Medium', color: 'black'}}>
            This is Other Location
          </Text>
          <Text
            style={{
              fontFamily: 'Geologica-Medium',
              color: '#9c9c9c',
              fontSize: 10,
            }}>
            Other Location
          </Text>
        </View>
        <View>
          <Text style={{fontFamily: 'Geologica-Medium', color: 'black'}}>
            Pending
          </Text>
          <Text
            style={{
              fontFamily: 'Geologica-Medium',
              color: '#9c9c9c',
              fontSize: 10,
            }}>
            Status
          </Text>
        </View>
      </View>
      
      <View>
        <Remarkcomponent
          title="Description"
          placeholder="It is a long established fact that a reader will be d istracted by the readable content of a page when looking at its layout"
        />
      </View>

      <View style={Areaofconcernstyle.assigner}>
        <View>
          <Text
            style={{
              fontFamily: 'Geologica-Medium',
              color: 'black',
              fontSize: 15,
            }}>
            The Lake Admin
          </Text>
          <Text
            style={{
              fontFamily: 'Geologica-Medium',
              color: '#9c9c9c',
              fontSize: 10,
            }}>
            Assigned To
          </Text>
        </View>
      </View>
      <TouchableOpacity style={Areaofconcernstyle.buttonstyle}>
        <Text
          style={{fontFamily: 'Geologica-Bold', color: 'white', fontSize: 14}}>
          Submit
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Areaofconcerndetail;
