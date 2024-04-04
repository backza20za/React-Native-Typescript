import {View, Text, ScrollView, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import LoginStack from './AuthStack/LoginStack';
import AppStack from './AppStack/AppStack';
import CombineProvider from '../context/CombineProvider';
import {NavigationContainer} from '@react-navigation/native';

const CombindStack = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  return <>{isLogin ? <AppStack /> : <LoginStack />}</>;
};

export default CombindStack;
