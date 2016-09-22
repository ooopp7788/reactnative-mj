/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  PixelRatio,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  ListView,
  Navigator,
  Dimensions,
} from 'react-native';
import { createStore } from 'redux';
import reducer from './reducers';
import Index from './app/pages/Index';

var BaseLeftToRightGesture = {

  // If the gesture can end and restart during one continuous touch
  isDetachable: false,

  // How far the swipe must drag to start transitioning
  gestureDetectMovement: 2,

  // Amplitude of release velocity that is considered still
  notMoving: 0.3,

  // Fraction of directional move required.
  directionRatio: 0.66,

  // Velocity to transition with when the gesture release was "not moving"
  snapVelocity: 2,

  // Region that can trigger swipe. iOS default is 30px from the left edge
  edgeHitWidth: 10,

  // Ratio of gesture completion when non-velocity release will cause action
  stillCompletionRatio: 3 / 5,

  fullDistance: Dimensions.get('window').width,

  direction: 'left-to-right',

};
var BaseOverswipeConfig = {
  frictionConstant: 1,
  frictionByDistance: 1.5,
};
var BaseRightToLeftGesture = {
  ...BaseLeftToRightGesture,
  direction: 'right-to-left',
};


class AppTest extends Component {

  render() {
    let defaultName = '首页';
    let defaultComponent = Index;
    return (
      <Navigator
        //初始化route对象
        initialRoute={{
          title: defaultName,
          component: defaultComponent,
        }}

        //Scene配置动画
        configureScene={(route,_navigator) => {
          let config = route.sceneConfig || Navigator.SceneConfigs.HorizontalSwipeJump;
          if (config != undefined) {
            if(_navigator.length == 1) {
              config.gestures.jumpForward.overswipe = null;
              config.gestures.jumpBack.overswipe = null;
            } else {
              config.gestures.jumpBack = {
                ...BaseLeftToRightGesture,
                overswipe: BaseOverswipeConfig,
                edgeHitWidth: 30,
                isDetachable: true,
              },
                config.gestures.jumpForward = {
                  ...BaseRightToLeftGesture,
                  overswipe: BaseOverswipeConfig,
                  edgeHitWidth: 10,
                  isDetachable: true,
                }
            }
          }
          return config;
        }}

        //渲染Scene
        renderScene={(route, navigator) => {
          let Component = route.component;   //route对象中取出Component
          return (
            <View style={styles.container}>
              <View style={styles.header}>
                <Text style={{fontSize: 32*minP,alignSelf:'center',flex:1,marginTop: 27*minP,}}>{route.title}</Text>
              </View>
              <Component
                {...route.param}   //传递参数
                navigator={navigator}   //将navigator组件传递给Component的props——this.props.navigator
              />
            </View>
          )
        }}
      />
    );
  }
}

const minP = 1/PixelRatio.get();
const styles = {
  container: {
    flex:1,
    alignItems: 'stretch',
  },
  header: {
    height: 96*minP,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
};

AppRegistry.registerComponent('AppTest', () => AppTest);
