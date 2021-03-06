/*
图片按规定比例布局，props中ratio为宽高比
 */
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';

export default class ImageRatio extends Component {

  constructor(props) {
    super(props);

    this.state = {
      style: {},
    };

    this.onImageLayout=this.onImageLayout.bind(this);
  }

  onImageLayout(event) {
    let layout=event.nativeEvent.layout;
    const {ratio} = this.props;
    let newHeight = layout.width/ratio;
    this.setState({
      style: {
        height: newHeight,
        width: layout.width,
      }
    });
  }

  render() {
    
    return (
      <Image
        {...this.props}
        style={[styles.base,this.state.style]}
        onLayout={this.onImageLayout}
      />
    )
  }
}

const styles = {
  base : {
    flex:1,
    resizeMode: Image.resizeMode.stretch,
  }
};