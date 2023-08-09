import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import Background from './Background';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {loginuser} from '../redux/slice/userslice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = () => {
  const dispatch = useDispatch();

  const checklogin = async () => {
    try {
      const token = await AsyncStorage.getItem('TOKEN');
      dispatch(loginuser(token));
    //   if (token !== null) {
    //     navigate('BottomStack');
    //   } else {
    //     navigate('AuthStack');
    //   }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checklogin();
  }, []);

  return (
    <Background>
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <Text
          style={{fontSize: 40, fontFamily: 'Geologica-Bold', color: 'black'}}>
          Colab
        </Text>
      </View>
    </Background>
  );
};

export default Splash;
