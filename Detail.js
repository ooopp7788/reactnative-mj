import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default class Detail extends Component {

  _backButton() {
    const {navigator} = this.props;

    if(navigator) {
      navigator.pop();   //除去最后一个页面，可以回到上一个页面
    }
  }

  _nextButton() {
    const {navigator} = this.props; //或者const navigator = this.props.navigator

    if(navigator) {
      navigator.push({
        name: 'Deatail',
        component: Detail,
      })
    }
  }

  render() {
    return (
      <View style={{flexDirection: 'row', justifyContent: 'center' ,alignItems: 'center'}}>
        <Text style={{padding: 10, fontSize: 42, textAlign: 'center'}} onPress={this._backButton.bind(this)}>返回</Text>
        <Text style={{padding: 10, fontSize: 42, textAlign: 'center'}} onPress={this._nextButton.bind(this)}>再进入一个Details</Text>
      </View>
    )
  }
}
