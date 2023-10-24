import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppNavigation from './src/navigation/AppNavigation'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import {ImagePropTypes} from 'deprecated-react-native-prop-types';


export default function App() {
  return (
    <GestureHandlerRootView >
      <AppNavigation />
    </GestureHandlerRootView>
  )
}



