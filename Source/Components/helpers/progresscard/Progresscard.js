import { View, Text } from 'react-native'
import React from 'react'
import * as Progress from 'react-native-progress';
import { horizontalScale, verticalScale } from '../../../assets/Dimension';

const Progresscard = () => {
  return (
    <View >
      <Text >Quantity 30%</Text>
      <Progress.Bar progress={0.3} width={320} />
    </View>
  )
}

export default Progresscard;