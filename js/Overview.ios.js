/**
 * @flow
 */

import React, { Component } from 'react';
import {
  Navigator
} from 'react-native';

const List = require('./List');
const ListItem = require('./ListItem');

class Overview extends Component {
  constructor() {
    super();
    this._renderScene = this._renderScene.bind(this);
  }

  _renderScene(route, navigator) {
   if(route.name == 'List') {
     return <List navigator={navigator} />
   }
   if(route.name == 'ListItem') {
     return <ListItem navigator={navigator} />
   }
  }

  render() {
    return (
      <Navigator
        style={{ flex:1 }}
        initialRoute={{ name: 'List' }}
        renderScene={ this._renderScene } />
    )
  }
}

module.exports = Overview;
