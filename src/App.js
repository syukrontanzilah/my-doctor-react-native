import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Splash, GetStarted } from './pages';
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';

export default class App extends Component {
  render() {
    return (
  <NavigationContainer>
    <Router/>
  </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({
});


