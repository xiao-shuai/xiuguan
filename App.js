
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,YellowBox} from 'react-native';
import  AllStack from './src/config/navigation'
import {Provider} from 'mobx-react'
import store from './src/mobx/index'

console.disableYellowBox=true
export default class App extends Component<Props> {

  render() {
    return (
      <Provider {...store}>
<AllStack />
    </Provider>
    );
  }
}

const styles = StyleSheet.create({
  
});
