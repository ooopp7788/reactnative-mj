import React, { Component } from 'react';
import {
  indexheet,
  Text,
  View,
  Image,
  TextInput,
  PixelRatio,
  ScrollView,
  ListView,
  Navigator,
} from 'react-native';

import Detail from './Detail';
import ImageRatio from './ImageRatio';
import Swiper from 'react-native-swiper';

//组件容器
export default class Index extends Component {
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
      this.setState({
        dataSource: ds.cloneWithRows(responseJson.movies),
      });
    });
  }

  render() {
    //配置images路径
    let pic = {
      uri:'https://www.baidu.com/img/bd_logo1.png',
    };
    let sliderImgs = [
      'http://images3.c-ctrip.com/SBU/apph5/201505/16/app_home_ad16_640_128.png',
      'http://images3.c-ctrip.com/rk/apph5/C1/201505/app_home_ad49_640_128.png',
      'http://images3.c-ctrip.com/rk/apph5/D1/201506/app_home_ad05_640_128.jpg'
    ];

    let BUIcon = [
      'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/%E6%9C%AA%E6%A0%87%E9%A2%98-1.png',
      'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/feiji.png',
      'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/lvyou.png',
      'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/gonglue.png'

    ];

    let Images = [
      'http://webresource.c-ctrip.com/ResCRMOnline/R5/html5/images/zzz_pic_salead01.png',
      'http://images3.c-ctrip.com/rk/apph5/B1/201505/app_home_ad06_310_120.jpg'
    ];
    return (
      <ScrollView horizontal={false}>
      <View style={index.container}>

        <Swiper style={index.wrapper} showsButtons={true} autoplay={true} height={160} showsPagination={false}>
          <Image style={index.slide} source={{uri:sliderImgs[0]}}/>
          <Image style={index.slide} source={{uri:sliderImgs[1]}}/>
          <Image style={index.slide} source={{uri:sliderImgs[2]}}/>
        </Swiper>
        <ImageRatio
          ratio={16/9}
          source={pic}
          style={{flex:1,resizeMode: Image.resizeMode.contain,}}
        />
        <View style={[index.main]}>
          <View style={[index.row_outer,index.border,index.bg_red]}>
            <View style={[index.col_outer]}>
              <View style={index.col_inner}>
                <Text style={index.font18}>酒店</Text>
              </View>
              <View style={index.col_inner}>
                <Image
                  style={index.icon}
                  source={{uri:BUIcon[0]}}
                />
              </View>
            </View>
            <View style={[index.col_outer,index.borderLeft]}>
              <View style={[index.col_inner,index.borderBottom]}>
                <Text style={index.font18}>海外</Text>
              </View>
              <View style={index.col_inner}>
                <Text style={index.font18}>周边</Text>
              </View>
            </View>
            <View style={[index.col_outer,index.borderLeft]}>
              <View style={[index.col_inner,index.borderBottom]}>
                <Text style={index.font18}>团购.特惠</Text>
              </View>
              <View style={index.col_inner}>
                <Text style={index.font18}>客栈.公寓</Text>
              </View>
            </View>
          </View>
          <View style={[index.row_outer,index.border,index.bg_blue]}>
            <View style={[index.col_outer]}>
              <View style={index.col_inner}>
                <Text style={index.font18}>酒店</Text>
              </View>
              <View style={index.col_inner}>
                <Image
                  style={index.icon}
                  source={{uri:BUIcon[1]}}
                />
              </View>
            </View>
            <View style={[index.col_outer,index.borderLeft]}>
              <View style={[index.col_inner,index.borderBottom]}>
                <Text style={index.font18}>海外</Text>
              </View>
              <View style={index.col_inner}>
                <Text style={index.font18}>周边</Text>
              </View>
            </View>
            <View style={[index.col_outer,index.borderLeft]}>
              <View style={[index.col_inner,index.borderBottom]}>
                <Text style={index.font18}>团购.特惠</Text>
              </View>
              <View style={index.col_inner}>
                <Text style={index.font18}>客栈.公寓</Text>
              </View>
            </View>
          </View>
          <View style={[index.row_outer,index.border,index.bg_yellow]}>
            <View style={[index.col_outer]}>
              <View style={index.col_inner}>
                <Text style={index.font18}>酒店</Text>
              </View>
              <View style={index.col_inner}>
                <Image
                  style={index.icon}
                  source={{uri:BUIcon[2]}}
                />
              </View>
            </View>
            <View style={[index.col_outer,index.borderLeft]}>
              <View style={[index.col_inner,index.borderBottom]}>
                <Text style={index.font18}>海外</Text>
              </View>
              <View style={index.col_inner}>
                <Text style={index.font18}>周边</Text>
              </View>
            </View>
            <View style={[index.col_outer,index.borderLeft]}>
              <View style={[index.col_inner,index.borderBottom]}>
                <Text style={index.font18}>团购.特惠</Text>
              </View>
              <View style={index.col_inner}>
                <Text style={index.font18}>客栈.公寓</Text>
              </View>
            </View>
          </View>
          <View style={[index.row_outer,index.border,index.bg_green]}>
            <View style={[index.col_outer]}>
              <View style={index.col_inner}>
                <Text style={index.font18}>酒店</Text>
              </View>
              <View style={index.col_inner}>
                <Image
                  style={index.icon}
                  source={{uri:BUIcon[3]}}
                />
              </View>
            </View>
            <View style={[index.col_outer,index.borderLeft]}>
              <View style={[index.col_inner,index.borderBottom]}>
                <Text style={index.font18}>海外</Text>
              </View>
              <View style={index.col_inner}>
                <Text style={index.font18}>周边</Text>
              </View>
            </View>
            <View style={[index.col_outer,index.borderLeft]}>
              <View style={[index.col_inner,index.borderBottom]}>
                <Text style={index.font18}>团购.特惠</Text>
              </View>
              <View style={index.col_inner}>
                <Text style={index.font18}>客栈.公寓</Text>
              </View>
            </View>
          </View>
          <View style={[index.bottom,index.bg_white,index.borderGray]}>
            <View style={[index.bottom_col_outer,index.borderLeft_gray]}>

              <View style={[index.bottom_col_outer]}>
                <Image
                  style={[index.images]}
                  source={{uri:Images[0]}}
                />
              </View>
            </View>
            <View style={[index.bottom_col_outer,index.borderLeft_gray]}>

              <View style={[index.bottom_col_outer]}>
                <Image
                  style={[index.images]}
                  source={{uri:Images[1]}}
                />
              </View>
            </View>
          </View>
        </View>

      </View>
      </ScrollView>
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
        title: 'Detail',
        component: Detail,
        param : {
          age: 18,
          usr: 'juicy'
        }
      })
    }
  }
}

const minP = 1/PixelRatio.get();
const index = {
  container: {
    backgroundColor: '#f8f8f8',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  //Swiper
  wrapper: {
    height:160,
  },
  slide: {
    height:160,
    resizeMode: Image.resizeMode.stretch,
  },

  borderGray: {
    borderWidth: 0.5,
    borderColor: '#ccc',
  },
  borderBottom:{
    borderBottomWidth:0.5,
    borderBottomColor:'#fff',
  },
  borderLeft:{
    borderLeftWidth:0.5,
    borderLeftColor:'#fff',
  },
  borderLeft_gray: {
    borderLeftWidth:0.5,
    borderLeftColor:'#ccc',
  },
  //main
  main: {
    flexDirection: 'column',
    marginTop: 5*2,
  },
  row_outer: {
    flexDirection: 'row',
    height: 84*2,
    marginLeft: 5*2,
    marginRight: 5*2,
    marginBottom: 10*2,
    borderRadius:5*2,
  },
  col_outer: {
    height: 84*2,
    flexDirection: 'column',
    //justifyContent: 'center',
    //alignItems: 'stretch',
    flex: 1,
  },
  col_inner: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    flex:1,
    height: 80,
    width: 80,
    resizeMode: Image.resizeMode.contain,
  },
  bg_red: {
    backgroundColor: '#FA6778',
    borderColor: '#FA6778',
  },
  bg_blue: {
    backgroundColor: '#3D98FF',
    borderColor: '#3D98FF',
  },
  bg_green: {
    backgroundColor: '#5EBE00',
    borderColor: '#5EBE00',
  },
  bg_yellow: {
    backgroundColor: '#FC9720',
    borderColor: '#FC9720',
  },
  bg_white: {
    backgroundColor: '#fff',
    borderColor: '#fff',
  },

  font18: {
    fontSize: 30,
    color: '#fff',
  },
  font18_black: {
    fontSize: 30,
    color: '#999',
  },
  font14_gray: {
    fontSize: 14,
    color: '#cecece',
  },

  bottom: {
    height: 60*2,
    marginLeft: 5*2,
    marginRight: 5*2,
    flexDirection: 'row',
  },
  bottom_col_outer: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  bottom_col_inner: {
    flex:1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  space: {
    marginTop: 5,
    marginBottom: 5,
  },

  //ScrollView
  images: {
    flex:1,
    resizeMode: Image.resizeMode.contain,
  },
  lists: {
    height: 400,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  }
};
