/**
 * Sample React Native App
 * https://github.com/facebook/react-native
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

/*class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TabBarIOS>
          <TabBarIOS.Item title="React Native" selected={true}>
            <NavigatorIOS initialRoute={{ title: 'React Native' }} />
          </TabBarIOS.Item>
        </TabBarIOS>
      </View>
    );
  }
}*/

class Phinancials extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <TextInput placeholder="Hello" style={styles.textInput} />
        </View>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
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

AppRegistry.registerComponent('Phinancials', () => Phinancials);
