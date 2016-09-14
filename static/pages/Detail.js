import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ListView,
  Image,
} from 'react-native';

import ImageRatio from './ImageRatio';

export default class Detail extends Component {

  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({
      rowHasChanged:(r1,r2) => r1 !== r2
    });
    this.state = {
      dataSource: ds.cloneWithRows([
        '暂无数据...'
      ])
    };
  }

  componentWillMount() {
    //List数据加载
    this._getMoviesFromApiAsync();
  }

  //渲染ListView的row
  _renderRow(rowData, sectionid, rowid) {
    console.log(rowData)

    return (
      <View style={styles.container}>
        <Text style={styles.texts}>{rowData.releaseYear}年</Text>
        <Text style={styles.texts}>{rowData.title}</Text>
        <ImageRatio
          ratio={16/9}
          source={{
            uri:'http://images3.c-ctrip.com/SBU/apph5/201505/16/app_home_ad16_640_128.png',
          }}
          style={{flex:1,resizeMode: Image.resizeMode.contain,}}
        />
      </View>);
  }

  _rendHeader() {
    return (
      <View style={{flexDirection: 'column', justifyContent: 'center' ,alignItems: 'center'}}>
        <Text style={{padding: 10, fontSize: 42, textAlign: 'center'}} onPress={this._backButton.bind(this)}>返回</Text>
        <Text style={{padding: 10, fontSize: 42, textAlign: 'center'}} onPress={this._nextButton.bind(this)}>再进入一个Details</Text>
        <Text style={{padding: 10, fontSize: 42, textAlign: 'center'}}>{'欢迎'+this.props.age+'岁的'+this.props.usr+'!'}</Text>
      </View>
    )
  }



  //异步加载数据
  _getMoviesFromApiAsync() {
    const ds = new ListView.DataSource({
      rowHasChanged:(r1,r2) => r1 !== r2
    });
    return fetch('http://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataSource: ds.cloneWithRows(responseJson.movies),
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }



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
        title: 'Detail',
        component: Detail,
        param : {
          age: 19,
          usr: 'juicy'
        }
      })
    }
  }

  render() {
    
    return (
        <ListView
          enableEmptySections={true}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow.bind(this)}
          //renderFooter={this._renderFooter.bind(this)}
          renderHeader={this._rendHeader.bind(this)}
          //onResponderMove={(e)=> {this._onResponderMove(e)}}
          //onResponderRelease={(e)=> {this._onResponderRelease(e)}}
          //onEndReached={()=>{console.log('---');}}
        />
    )
  }
}

const styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  texts: {
    textAlign: 'center'
  }
};