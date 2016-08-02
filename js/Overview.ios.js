/**
 * @flow
 */

import React, { Component } from 'react';
import {
  Navigator
} from 'react-native';

const List = require('./List');

class Overview extends Component {
  constructor() {
    super();
    this._renderScene = this._renderScene.bind(this);
  }

  _renderScene(route, navigator) {
   if(route.name == 'Main') {
     return <List />
   }
   if(route.name == 'Home') {
     return <Home navigator={navigator} />
   }
  }

  render() {
    return (
      <Navigator
        style={{ flex:1 }}
        initialRoute={{ name: 'Main' }}
        renderScene={ this._renderScene } />
    )
  }
}

module.exports = Overview;
