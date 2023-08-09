import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStack from './Authstack';
import Bottom from './Mainstack';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();
const Appstack = () => {
  const {token} = useSelector(state => state.user);
  console.log('statefound', token);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!token ? (
          <Stack.Screen
            name="AuthStack"
            component={AuthStack}
            options={{headerShown: false}}
          />
        ) : (
          <Stack.Screen
            name="BottomStack"
            component={Bottom}
            options={{headerShown: false}}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Appstack;
