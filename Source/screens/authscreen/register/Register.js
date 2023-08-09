import {View, Text, TextInput, TouchableOpacity,Alert} from 'react-native';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Background from '../../../utils/Background';
import Style from './registerstyle';
const Register = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    
    if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
      Alert.alert('Error', 'All fields are required.');
      return;
    }

    if (!isValidEmail(email)) {
      Alert.alert('Error', 'Invalid email address.');
      return;
    }

    if (password.length < 4 && password.length > 4) {
      Alert.alert('Error', 'Password must be at least 6 characters long.');
      return;
    }

   
    Alert.alert('Success', 'User registered successfully.');
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };


  return (
    <Background>
      <View style={Style.registerView}>
        <Text style={Style.outertext}>Register User</Text>
      </View>
      <View style={Style.container}>
        <View>
          <Text
            style={{
              color: 'black',
              fontFamily: 'Geologica-Medium',
              marginLeft: 30,
              fontSize: 16,
            }}>
            Name
          </Text>
          <TextInput
            style={Style.inputbox}
            placeholder="Enter Your Name"
            value={name}
            onChangeText={value => setName(value)}></TextInput>
          <Text
            style={{
              color: 'black',
              fontFamily: 'Geologica-Medium',
              marginLeft: 30,
              fontSize: 16,
            }}>
            Email
          </Text>
          <TextInput
            style={Style.inputbox}
            placeholder="Enter Your Email"
            value={email}
            onChangeText={value => setEmail(value)}></TextInput>
          <Text
            style={{
              color: 'black',
              fontFamily: 'Geologica-Medium',
              marginLeft: 30,
              fontSize: 16,
            }}>
            Password
          </Text>
          <TextInput
            style={Style.inputbox}
            placeholder="Enter Your Password"
            value={password}
            onChangeText={value => setPassword(value)}
            secureTextEntry={true}></TextInput>
          <TouchableOpacity
            style={Style.buttontouchable}
            onPress={() => {
              handleSubmit();
            }}>
            <Text
              style={{
                color: 'black',
                fontFamily: 'Geologica-Medium',
                textAlign: 'center',
                fontSize: 20,
              }}>
              Register
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
          <Text style={{fontSize: 15, fontFamily: 'Geologica-Medium'}}>
            Alerady a User?{' '}
          </Text>
          <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
            <Text
              style={{
                fontSize: 15,
                color: 'blue',
                fontFamily: 'Geologica-Medium',
              }}>
              Please Login to continue
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Background>
  );
};

export default Register;
