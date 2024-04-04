import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from '../../screens/AuthScreen/LoginScreen';

const LoginStack = () => {
  const LoginStack = createNativeStackNavigator();
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen
        name="Login"
        component={LoginScreen}
        options={{title: 'เข้าระบบ', headerShown: false}}
      />
    </LoginStack.Navigator>
  );
};

export default LoginStack;
