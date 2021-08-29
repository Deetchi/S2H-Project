import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './src/navigations/Navigator';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';

export default class App extends React.Component{
  state = {
    isFontLoaded:false
  }

  // async componentDidMount(){
  //   await FontloadAsync({
  //     'SemiBold':require('./src/fonts/GoblinOne.ttf'),
  //     'Medium '
  //   })
  //}
  render(){
    return (
     <AppNavigator />
  );
}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
