
import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from "./screens/WelcomeScreen";
import {AppDrawerNavigator} from "./components/AppDrawerNavigator";

export default function App() {
  return (
  <AppContainer/>
  );
}

const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen:WelcomeScreen},
  Drawer:{screen:AppDrawerNavigator}

  
})
const AppContainer = createAppContainer(switchNavigator)
