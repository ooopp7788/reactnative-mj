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
  View,
  Image,
  TextInput,
  ScrollView,
  ListView,
  Navigator,
} from 'react-native';

import MyScene from './MyScene';

class AppTest extends Component {

  render() {
    let defaultName = 'MyScene';
    let defaultComponent = MyScene;
    return (
      <Navigator
        //初始化route对象
        initialRoute={{
          name: defaultName,
          component: defaultComponent   //route对象初始化赋值route.component为第一页（初始页）组件
        }}

        //Scene配置动画
        configureScene={(route) => {
          return Navigator.SceneConfigs.VerticalDownSwipeJump;
        }}

        //渲染Scene
        renderScene={(route, navigator) => {
          let Component = route.component;   //route对象中取出Component
          return <Component
            {...route.params}   //传递参数
            navigator={navigator}   //将navigator组件传递给Component的props——this.props.navigator
          />
        }}
      />
    );
  }
}

AppRegistry.registerComponent('AppTest', () => AppTest);
