import {View, Text,Image,TextInput} from 'react-native';
import React from 'react';
import {moderateScale} from '../assets/Dimension';

const Searchbar = () => {
  return (
    <View>
      <View
        style={{
          backgroundColor: '#ebedf2',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderRadius: moderateScale(5),
          marginTop: 10,
        }}>
        <TextInput placeholder='Search' style={{fontFamily: 'Geologica-Bold',width:350}}>
        </TextInput>
        <Image style={{position:"absolute",right:10}} source={require("../assets/Images/searchicon.png")}/>
      </View>
    </View>
  );
};

export default Searchbar;
