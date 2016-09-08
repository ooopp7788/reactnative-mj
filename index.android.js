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
} from 'react-native';


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

class AppTest extends Component {
  constructor(props){
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged:(r1,r2) => r1 !== r2
    });
    console.log(this.getMoviesFromApiAsync());
    this.state = {
      dataSource: ds.cloneWithRows([
          'fuck'
      ])
    };

    this.getMoviesFromApiAsync().then((responseJson) => {

      console.log(responseJson.movies);
      this.setState({
        dataSource: ds.cloneWithRows(responseJson.movies),
      });
    });

  }
  render() {
    let pic = {
      uri:'https://www.baidu.com/img/bd_logo1.png'
    };
    return (
      <View style={styles.container}>
        <PizzaTranslator placeholder="请输入要转换的文字！"/>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <View style={styles.lists}><Text>{rowData.title}</Text><Image source={pic} style={styles.images}/></View>}
        />
      </View>
    );
  }
  getMoviesFromApiAsync() {
    return fetch('http://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())

      .catch((error) => {
        console.error(error);
      });
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

AppRegistry.registerComponent('AppTest', () => AppTest);
