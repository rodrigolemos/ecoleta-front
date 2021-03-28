import React from 'react'
import { StatusBar, Text } from 'react-native'
import { Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto'
import { Ubuntu_700Bold, useFonts } from '@expo-google-fonts/ubuntu'

import Routes from './src/routes'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Ubuntu_700Bold
  })

  if (!fontsLoaded) {
    return <Text>Carregando...</Text>
  }

  return (
    <>
      <StatusBar />
      <Routes />
    </>
  )
}
