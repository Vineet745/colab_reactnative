import {View, Text} from 'react-native';
import React from 'react';
// import { BarChart } from 'react-native-chart-kit';
import {moderateScale, verticalScale} from '../../../assets/Dimension';
import {BarChart} from 'react-native-gifted-charts';
import styles from "../countsummary.js/countsummarystyle"
const Countsummary = () => {
  const data = [
    {
      value: 110,
      label: 'Amit',
      topLabelComponent: () => (
        <Text
          style={{
            color: 'black',
            fontSize: 10,
            fontFamily: 'Geologica-Bold',
            marginBottom: 6,
          }}>
          580
        </Text>
      ),
    },
    {
      value: 60,
      label: 'Nilesh',
      topLabelComponent: () => (
        <Text
          style={{
            color: 'black',
            fontFamily: 'Geologica-Bold',
            fontSize: 10,
            marginBottom: 6,
          }}>
          380
        </Text>
      ),
    },
    {
      value: 90,
      label: 'Kanan',
      topLabelComponent: () => (
        <Text
          style={{
            color: 'black',
            fontFamily: 'Geologica-Bold',
            fontSize: 10,
            marginBottom: 6,
          }}>
          480
        </Text>
      ),
    },
    {
      value: 30,
      label: 'Vaibhav',
      topLabelComponent: () => (
        <Text
          style={{
            color: 'black',
            fontFamily: 'Geologica-Bold',
            fontSize: 10,
            marginBottom: 6,
          }}>
          150
        </Text>
      ),
    },
    {
      value: 35,
      label: 'Afroz',
      topLabelComponent: () => (
        <Text
          style={{
            color: 'black',
            fontFamily: 'Geologica-Bold',
            fontSize: 10,
            marginBottom: 6,
          }}>
          250
        </Text>
      ),
    },
    {
      value: 85,
      label: 'Kuldeep',
      topLabelComponent: () => (
        <Text
          style={{
            color: 'black',
            fontFamily: 'Geologica-Bold',
            fontSize: 10,
            marginBottom: 6,
          }}>
          480
        </Text>
      ),
    },
    
  ];

  return (
    <View style={{marginVertical: verticalScale(15)}}>
      <BarChart 
        barWidth={34}
        width={300}
        noOfSections={6}
        height={220}
        data={data}
        rulesType="solid"
        spacing={15}
        initialSpacing={10}
        frontColor="#ffba4d"
      
      />
    </View>
  );
};

export default Countsummary;
