import { View, Text } from 'react-native'
import React from 'react'
import { BarChart } from 'react-native-gifted-charts';
import { horizontalScale, verticalScale } from '../../../assets/Dimension';

const Summarychart = () => {

    const data = [
        {
          value: 580,
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
          value: 380,
          label: 'Nilesh',
          topLabelComponent: () => (
            <Text
              style={{
                color: 'black',
                fontFamily: 'Geologica-Bold',
                fontSize: 10,
              }}>
              380
            </Text>
          ),
        },
        {
          value: 480,
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
          value: 150,
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
          value: 250,
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
       
        
      ];

  return (
    <View style={{height:250,paddingVertical:5,paddingLeft:70}}>
<BarChart
        barWidth={28}
        width={170}
        noOfSections={6}
        height={230}
        data={data}
        maxValue={600}
        rulesType="solid"
        spacing={6}
        initialSpacing={0}
        frontColor="black"
        horizontal
      />
      </View>
  )
}

export default Summarychart



// import React, { useEffect } from 'react';
// import { View } from 'react-native';
// import { ChartComponent, StackingBarSeries, Category, Legend, Tooltip } from '@syncfusion/ej2-react-charts';
// import { Browser } from '@syncfusion/ej2-base';

// const ChartExample = () => {
//   useEffect(() => {
//     const chart = new ChartComponent({
//       // Your chart configuration
//     });

//     chart.appendTo('#container');

//     return () => {
//       chart.destroy();
//     };
//   }, []);

//   return (
//     <View style={{ flex: 1 }}>
//       <View id="container" />
//     </View>
//   );
// };

// export default ChartExample;
