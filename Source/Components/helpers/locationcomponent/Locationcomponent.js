import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import locationcomponentstyle from './locationcomponentstyle';
import BottomTester from '../../bottomsheet/Bottomsheet';

const Locationcomponent = ({title, togglebutton, backgroundColor, color}) => {
  return (
    <View>
    <TouchableOpacity
      onPress={togglebutton}
      style={[
        locationcomponentstyle.dropdownone,
        {backgroundColor: backgroundColor},
      ]}>
      <Text style={[locationcomponentstyle.dropingtext, {color: color}]}>
        {title}
      </Text>
      <Image source={require('../../../assets/Images/dropdownlist.png')} />
    </TouchableOpacity>
    </View>
  );
};

export default Locationcomponent;
