import { View, Text } from 'react-native'
import React from 'react'
import CustomNavigationProvider from './Provider/CustomNavigationProvider';
import CustomNativeBaseProvider from './Provider/CustomNativeBaseProvider';

const CombineProvider = ({
    children,
  }: {
    children: React.ReactNode;
  }) => {
  return (
    <>
    <CustomNativeBaseProvider>
        <CustomNavigationProvider>
            {children}
        </CustomNavigationProvider>
    </CustomNativeBaseProvider>
    </>
  )
}

export default CombineProvider