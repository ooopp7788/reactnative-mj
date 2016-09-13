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
} from 'react-native';

import Index from './static/pages/Index';

class AppTest extends Component {

  render() {
    let defaultName = '首页';
    let defaultComponent = Index;
    return (
      <Navigator
        //初始化route对象
        initialRoute={{
          title: defaultName,
          component: defaultComponent,   //route对象初始化赋值route.component为第一页（初始页）组件
          param: {
            age: 12,
            usr: 'lmj'
          }
        }}

        //Scene配置动画
        configureScene={(route) => {
          return Navigator.SceneConfigs.VerticalDownSwipeJump;
        }}

        //渲染Scene
        renderScene={(route, navigator) => {
          let Component = route.component;   //route对象中取出Component
          return (
            <View style={styles.container}>
              <View style={styles.header}>
                <Text style={{fontSize: 32,alignSelf:'center',flex:1,marginTop: 27,}}>{route.title}</Text>
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

const styles = {
  container: {
    flex:1,
    alignItems: 'stretch',
  },
  header: {
    height: 96,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
};

AppRegistry.registerComponent('AppTest', () => AppTest);
