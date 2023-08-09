import {View, Text} from 'react-native';
import React,{useState,useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Register from '../../screens/authscreen/register/Register';
import Login from '../../screens/authscreen/login/Login';
import Splash from '../../utils/Splash';
const Stack = createNativeStackNavigator();




const AuthStack = () => {

  const [splashtimer, setsplashtimer] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setsplashtimer(false);
    }, 3000);

    // Clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);
  if (splashtimer) {
    return <Splash />;
  }
  return (
    
    <Stack.Navigator>
     <Stack.Screen name="Register" component={Register} options={{headerShown:false}} />
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
    </Stack.Navigator>
  );
};

export default AuthStack;
