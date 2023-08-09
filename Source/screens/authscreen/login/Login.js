import {View, Text, TouchableOpacity, TextInput,Alert} from 'react-native';
import React, {useState} from 'react';
import Background from '../../../utils/Background';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {loginuser} from '../../../redux/slice/userslice';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Login = props => {
  const dispatch = useDispatch();
  const [user_id, setUser_id] = useState('');
  const [password, setPassword] = useState('');

  // Api

  const handleLogin = async props => {
    
    if (user_id.trim() === '' || password.trim() === '') {
      // Check if any of the fields are empty
      Alert.alert('Error', 'Email and password are required.');
      return;
    }

    

    try {
      const response = await axios.post(
        'https://node.colabtools.com/api/validUser',
        {
          user_id,
          password,
        },
      );

      const token = response.data.token;
      await AsyncStorage.setItem('TOKEN',token)
      dispatch(loginuser(token));
      Alert.alert('Success', 'Login successful.');
    } catch (error) {
      // Handle login error
      console.log(error);
    }
  };



  return (
    <Background>
      <View style={Style.registerView}>
        <Text style={Style.outertext}>Login User</Text>
      </View>
      <View style={Style.container}>
        <View>
          <Text
            style={{
              color: 'black',
              fontFamily: 'Geologica-Medium',
              marginLeft: 30,
              fontSize: 14,
            }}>
            UserId
          </Text>
          <TextInput
            style={Style.inputbox}
            value={user_id}
            onChangeText={value => setUser_id(value)}
            placeholder="Enter Your user_id"></TextInput>
          <Text
            style={{
              color: 'black',
              fontFamily: 'Geologica-Medium',
              marginLeft: 30,
              fontSize: 14,
            }}>
            Password
          </Text>
          <TextInput
            style={Style.inputbox}
            value={password}
            onChangeText={value => setPassword(value)}
            placeholder="Enter Your Password"></TextInput>
          <TouchableOpacity
            style={Style.buttontouchable}
            onPress={() => handleLogin()}>
            <Text
              style={{
                color: 'black',
                fontFamily: 'Geologica-Medium',
                textAlign: 'center',
                fontSize: 16,
              }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 30,
          }}>
          <Text style={{fontSize: 18, fontFamily: 'Geologica-Medium'}}>
            Not a User?{' '}
          </Text>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Register')}>
            <Text
              style={{
                fontSize: 16,
                color: 'blue',
                fontFamily: 'Geologica-Medium',
              }}>
              Please Signup to continue
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Background>
  );
};

export default Login;
