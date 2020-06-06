import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';
import FlashMessage from "react-native-flash-message";

export default class App extends Component {
  render() {
    return (
      <>
        <NavigationContainer>
          <Router />
        </NavigationContainer>
        <FlashMessage position="top" />
      </>
    )
  }
}

const styles = StyleSheet.create({
});


