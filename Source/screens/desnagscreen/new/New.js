import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import Desnagcard from '../../../Components/cardscomponents/desnagcard/Desnagcard';
import { horizontalScale, verticalScale } from '../../../assets/Dimension';

const New = () => {
  return (
    <View style={{
      paddingHorizontal: horizontalScale(20),
      marginTop:verticalScale(12)
      }}>
        <ScrollView showsVerticalScrollIndicator={false}>
      <Desnagcard />
      <Desnagcard />
      <Desnagcard />
      <Desnagcard />
      <Desnagcard />
      </ScrollView>
    </View>
  );
};

export default New;
