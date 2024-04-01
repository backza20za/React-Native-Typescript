import React from 'react'
import { SafeAreaView } from 'react-native'

type Props = {}

export default function SafeAreaProvider({ children }: {
    children: React.ReactNode
}) {
  return (
   <SafeAreaView>
{children}
   </SafeAreaView>
  )
}