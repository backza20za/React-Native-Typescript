import {NativeBaseProvider} from 'native-base';
import React from 'react';

type Props = {};

export default function CustomNativeBaseProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <NativeBaseProvider>{children}</NativeBaseProvider>;
}
