import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  getChildEventSubscriber,
  addNavigationHelpers,
  StackNavigator,
  NavigationActions,
} from "react-navigation";

import { observable, action } from "mobx";
import { Provider, observer } from "mobx-react";
import Stack from './Route'
import store from './stores';
import StorageUtil from 'utils/StorageUtil'
import NavigationService from './services/Navigation';

class App extends Component {
  constructor(props, context) {
    super(props, context);
  }

  // componentWillMount() {
  //   this.loadToken()
  // }

  // async loadToken() {
  //   let token = await StorageUtil.get('token')
  //   console.log('loadToken: ', token)

  //   if (!token) {
  //     NavigationService.navigate('Login')
  //   }
  // }

  render() {
    return (
      <Provider store={store}>
          <Stack
            ref={navigatorRef => {
              NavigationService.setContainer(navigatorRef);
            }}
          />
      </Provider>
    );
  }
}


export default App;