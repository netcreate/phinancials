/**
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  TabBarIOS,
  NavigatorIOS
} from 'react-native';

class Overview extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Phinancials!
        </Text>
        <Text style={styles.instructions}>
          The easy-as-hell financials application.
        </Text>
        <Text style={styles.instructions}>
          Tap "New form" for a new expenses form.
          This is the overview.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  textInput: {
    height: 40,
    width:200,
    borderColor: 'grey',
    backgroundColor: 'white',
    borderWidth: 1
  }
});

module.exports = Overview;
