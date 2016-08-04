/**
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

class NewExpenseForm extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>
          New expense:
        </Text>
          <View>
            <TextInput placeholder=" How much did you spend?..." style={styles.textInput} />
          </View>
        <Text style={styles.label}>
        Comment:
        </Text>
          <View>
            <TextInput placeholder=" Where did you spend it on?..." style={styles.textInput} />
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  label: {
    fontFamily: 'Noteworthy',
    fontWeight: 'bold',
    color: '#383899',
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
    fontFamily: 'Optima',
    height: 40,
    width:225,
    borderColor: 'grey',
    backgroundColor: 'white',
    borderWidth: 1
  }
});

module.exports = NewExpenseForm;
