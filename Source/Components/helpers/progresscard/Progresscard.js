import {View, Text} from 'react-native';
import React, {useState} from 'react';
import * as Progress from 'react-native-progress';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../assets/Dimension';
import progressstyle from './progressstyle';
import Slider from 'react-native-slider';

const Progresscard = () => {
  const [value, setValue] = useState(1);
  console.log(value);

  const roundValue = value => {
    const factor = 10 ** 0;
    return Math.round(value * factor) / factor;
  };

  return (
    <View style={progressstyle.progressmain}>
      <View style={progressstyle.progresstextcontainer}>
        <Text style={progressstyle.maintext}>
          Quantity {roundValue(value, 0)} %
        </Text>
      </View>
      <Slider
        maximumValue={100}
        value={value}
        onValueChange={newValue => setValue(newValue)}
      />
      {/* <Progress.Bar progress={0.3} width={340} color={"black"}  borderColor='transparent' unfilledColor="#f6f8fb"/> */}
      <View style={progressstyle.progressbartext}>
        <Text
          style={{
            fontFamily: 'Geologica-Regular',
            fontSize: moderateScale(12),
          }}>
          60 SFT
        </Text>
        <Text
          style={{
            fontFamily: 'Geologica-Regular',
            fontSize: moderateScale(12),
          }}>
          200 SFT
        </Text>
      </View>
      <View style={progressstyle.totalquantity}>
        <Text style={progressstyle.totalquantitytext}>Total Quantity 200</Text>
      </View>
      <View style={progressstyle.workingstatus}>
        <View style={progressstyle.valuestatusholder}>
          <View style={progressstyle.countholder}>
            <Text style={progressstyle.count}>{roundValue(value, 0)}</Text>
          </View>
          <Text
            style={{
              fontFamily: 'Geologica-Medium',
              fontSize: moderateScale(11),
              paddingLeft: horizontalScale(2),
            }}>
            Achived
          </Text>
        </View>
        <View style={progressstyle.valuestatusholder}>
          <View style={progressstyle.countholder}>
            <Text style={progressstyle.count}>{roundValue(value, 0)}</Text>
          </View>
          <Text
            style={{
              fontFamily: 'Geologica-Medium',
              fontSize: moderateScale(11),
              paddingLeft: horizontalScale(2),
            }}>
            Cumulative
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Progresscard;
