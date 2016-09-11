import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  ListView,
  Navigator,
} from 'react-native';

import Detail from './Detail';

//组件容器
export default class MyScene extends Component {
  constructor(props){
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged:(r1,r2) => r1 !== r2
    });
    this.state = {
      dataSource: ds.cloneWithRows([
          '暂无数据...'
      ])
    };
    //List数据加载
    this._getMoviesFromApiAsync().then((responseJson) => {
      console.log('responseJson.movies:'+responseJson.movies);
      this.setState({
        dataSource: ds.cloneWithRows(responseJson.movies),
      });
    });

  }

  render() {
    //配置images路径
    let pic = {
      uri:'https://www.baidu.com/img/bd_logo1.png'
    };
    return (
      <View style={styles.container}>
        <Text onPress={this._pressButton.bind(this)} style={{padding: 10, fontSize: 42, textAlign: 'center'}}>导航下一页</Text>
        <PizzaTranslator placeholder="请输入要转换的文字！"/>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <View style={styles.lists}><Text>{rowData.title}</Text><Image source={pic} style={styles.images}/></View>}
        />
      </View>
    );
  }

  //异步加载数据
  _getMoviesFromApiAsync() {
    return fetch('http://facebook.github.io/react-native/movies.json')
    .then((response) => response.json())

    .catch((error) => {
      console.error(error);
    });
  }

  //press事件处理
  _pressButton() {
    const {navigator} = this.props; //或者const navigator = this.props.navigator

    if(navigator) {
      navigator.push({
        name: 'Deatail',
        component: Detail,
      })
    }
  }
}

class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
        <View style={{padding: 10}}>
          <TextInput
            autoCapitalize="characters"
            style={{height: 40,padding:10,}}
            placeholder={this.props.placeholder}
            onChangeText={(text) => this.setState({text})}
          />
          <Text style={{padding: 10, fontSize: 42}}>
            {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
          </Text>
        </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'stretch',
  },
  images: {
    width:270*2,
    height:129*2,
  },
  lists: {
    height: 400,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  }
};
