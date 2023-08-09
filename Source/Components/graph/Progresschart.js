import {View, Text, Dimensions} from 'react-native';
import React from 'react';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import {ProgressCircle} from 'react-native-svg-charts';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../assets/Dimension';

const Progresschart = () => {
  // each value represents a goal ring in Progress chart
  const data = {
    data: [0.5],
  };
  const screenWidth = Dimensions.get('window').width - 60;
  const tiltAngle = 15;
  return (
    <View>
      <View>
        <Text
          style={{
            fontFamily: 'Geologica-ExtraBold',
            fontSize: 15,
            letterSpacing: -0.3,
            color: 'black',
            padding: moderateScale
            (8),
          }}>
          Work Progress Summary
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            width: horizontalScale(195),
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}>
          <ProgressCircle
            style={{
              transform: [{rotate: `${tiltAngle}deg`}],
              height: 195,
              width: 124,
            }}
            backgroundColor={'#202a44'}
            strokeWidth={13}
            progress={0.51}
            cornerRadius={0}
            progressColor={'rgb(255,186,77)'}></ProgressCircle>
          <View
            style={{
              position: 'absolute',
              top: 83,
              left: 83,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontFamily: 'Geologica-SemiBold',
                color: 'black',
                fontSize: moderateScale(12),
              }}>
              Colab
            </Text>
            <Text
              style={{
                fontFamily: 'Geologica-SemiBold',
                color: 'grey',
                fontSize: 10,
              }}>
              Tools
            </Text>
          </View>
        </View>
        <View
          style={{
            width: horizontalScale(120),
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={{flexDirection: 'column', alignItems: 'flex-start'}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: verticalScale(10),
              }}>
              <View
                style={{
                  width: 15,
                  height: 15,
                  backgroundColor: 'black',
                  borderRadius: 50,
                }}></View>
              <Text
                style={{
                  fontSize: moderateScale(12),
                  fontFamily: 'Geologica-Regular',
                  color: 'black',
                  marginLeft: verticalScale(5),
                }}>
                Balance 49%
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  width: 15,
                  height: 15,
                  backgroundColor: '#ffba4d',
                  borderRadius: 50,
                }}></View>
              <Text
                style={{
                  fontSize: moderateScale(12),
                  fontFamily: 'Geologica-Regular',
                  color: 'black',
                  marginLeft: verticalScale(5),
                }}>
                Work Done 50%
              </Text>
            </View>
            {/* <Text>Work Done 49%</Text> */}
          </View>
        </View>
      </View>
    </View>
  );
};

export default Progresschart;

