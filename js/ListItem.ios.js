/**
 *
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  Image,
  StyleSheet,
  View,
} from 'react-native';

class ListItem extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>LOL WAT</Text>
        <Image
          source={require('../img/GitHub-Mark.png')} />
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
  text: {
    flex: 1,
  },
});


module.exports = ListItem;
