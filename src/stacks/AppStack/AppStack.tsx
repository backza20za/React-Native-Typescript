import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';

const AppStack = () => {
  const HomeStack = createNativeStackNavigator();
  return (
    <>
      <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={HomeScreen} />
      </HomeStack.Navigator>
    </>
  );
};

export default AppStack;
