/*
首页视频展示
 */
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  PixelRatio,
} from 'react-native';

export default class TitleWithLine extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <View style={styles.title}>
        <View style={styles.line}></View>
        <Text style={styles.text}>{this.props.title}</Text>
      </View>
    )
  }
}

const minP = 1/PixelRatio.get();
const styles = {
  title: {
    position: 'relative',
  },
  line: {
    width:7*minP,
    backgroundColor:'#444',
    borderRadius:10*minP,
    position: 'absolute',
    left: 0*minP,
    height: 34*minP,
    top: 6*minP,
  },
  text: {
    paddingLeft: 20*minP,
    fontSize:34*minP,
  },
};