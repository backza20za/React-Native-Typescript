import { NavigationContainer } from '@react-navigation/native';
import React from 'react'

const CustomNavigationProvider = ({
    children,
  }: {
    children: React.ReactNode;
  }) => {
  return (
    <NavigationContainer>{children}</NavigationContainer>
  )
}

export default CustomNavigationProvider