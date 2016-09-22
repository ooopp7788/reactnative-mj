import React, { Component } from 'react';
import {
  indexheet,
  Text,
  View,
  Image,
  TextInput,
  PixelRatio,
  Dimensions,
  ScrollView,
  ListView,
  Navigator,
  TouchableHighlight,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';

import Detail from './Detail';
var Scroll = require('./Scroll');
import Swiper from 'react-native-swiper';
import TitleWithLine from '../components/TitleWithLine';

//组件容器
export default class Index extends Component {
  constructor(props){
    super(props);
    this.state = {
      notestyle: [{},{},{}],

      sliderImgs : [],
      sliderNotes : [],
      scrollNavs : [],
      newVideos : [],
    };
  }

  componentWillMount() {
    this._getSliderImgs();//获取轮播图uri
  }

  render() {
    /*if(!this.state.sliderImgs.length){
      return (
        <View style={{height:50*minP,justifyContent:'center',alignItems:'center'}}>
          <Text>loading...</Text>
        </View>
      )
    }*/
    //配置images路径
    let notes = [

    ];
    for(var i = 0; i< this.state.sliderImgs.length; i++){

      notes.push(<TouchableWithoutFeedback key={i} style={index.imgContainer}><Image style={index.slide} source={{uri:this.state.sliderImgs[i].mem}}/></TouchableWithoutFeedback>);
    }
    return (
      <ScrollView horizontal={false}>
        <View style={index.container}>
          <View style={index.wrapper}>
            <Swiper showsButtons={false} autoplay={true} height={Dimensions.get('window').width/16*8} showsPagination={false}>
              {notes}
            </Swiper>
          </View>
          <ScrollView style={index.navs} horizontal={true} showsHorizontalScrollindicator={false}>
            <View style={index.navitem}>
              <Image style={index.navimg} source={require('../public/nav1.png')}/>
              <Text>扶贫专栏</Text>
            </View>
            <View style={index.navitem}>
              <Image style={index.navimg} source={require('../public/nav2.png')}/>
              <Text>扶贫专栏</Text>
            </View>
            <View style={index.navitem}>
              <Image style={index.navimg} source={require('../public/nav3.png')}/>
              <Text>扶贫专栏</Text>
            </View>
            <View style={index.navitem}>
              <Image style={index.navimg} source={require('../public/nav4.png')}/>
              <Text>扶贫专栏</Text>
            </View>
            <View style={index.navitem}>
              <Image style={index.navimg} source={require('../public/nav5.png')}/>
              <Text>扶贫专栏</Text>
            </View>
            <View style={index.navitem}>
              <Image style={index.navimg} source={require('../public/nav6.png')}/>
              <Text>扶贫专栏</Text>
            </View>
          </ScrollView>
          <View style={index.videomodule}>
            <View style={styles.mainv}>
              <TitleWithLine title={'通知公告'}/>
              <View style={styles.item}>
                <View onLayout={(evt)=>console.log(1,evt.nativeEvent.layout)} style={[styles.wrapper,styles.paddingRight5]}>
                  <Image
                    onLayout={(evt)=>console.log(evt.nativeEvent.layout)}
                    style={[styles.img]}
                    source={require('../public/default.png')}
                  />
                  <View style={styles.items}><Text style={[styles.itemleft]}>视频时长</Text><Text style={[styles.itemright]}>观看人数</Text></View>
                  <View style={styles.title}><Text>视频标题</Text></View>
                </View>
                <View onLayout={(evt)=>console.log(1,evt.nativeEvent.layout)} style={[styles.wrapper,styles.paddingLeft5]}>
                  <Image
                    onLayout={(evt)=>console.log(evt.nativeEvent.layout)}
                    style={[styles.img]}
                    source={require('../public/nav1.png')}
                  />
                  <View style={styles.items}><Text style={[styles.itemleft]}>视频时长</Text><Text style={[styles.itemright]}>观看人数</Text></View>
                  <View style={styles.title}><Text>视频标题</Text></View>
                </View>
              </View>
              <View style={styles.item}>
                <View onLayout={(evt)=>console.log(1,evt.nativeEvent.layout)} style={[styles.wrapper,styles.paddingRight5]}>
                  <Image
                    onLayout={(evt)=>console.log(evt.nativeEvent.layout)}
                    style={[styles.img]}
                    source={require('../public/default.png')}
                  />
                  <View style={styles.items}><Text style={[styles.itemleft]}>视频时长</Text><Text style={[styles.itemright]}>观看人数</Text></View>
                  <View style={styles.title}><Text>视频标题</Text></View>
                </View>
                <View onLayout={(evt)=>console.log(1,evt.nativeEvent.layout)} style={[styles.wrapper,styles.paddingLeft5]}>
                  <Image
                    onLayout={(evt)=>console.log(evt.nativeEvent.layout)}
                    style={[styles.img]}
                    source={require('../public/default.png')}
                  />
                  <View style={styles.items}><Text style={[styles.itemleft]}>视频时长</Text><Text style={[styles.itemright]}>观看人数</Text></View>
                  <View style={styles.title}><Text>视频标题</Text></View>
                </View>
              </View>
            </View>
            <View style={styles.mainv}>
              <TitleWithLine title={'最新课程'}/>
              <View style={styles.item}>
                <View onLayout={(evt)=>console.log(1,evt.nativeEvent.layout)} style={[styles.wrapper,styles.paddingRight5]}>
                  <Image
                    onLayout={(evt)=>console.log(evt.nativeEvent.layout)}
                    style={[styles.img]}
                    source={require('../public/default.png')}
                  />
                  <View style={styles.items}><Text style={[styles.itemleft]}>视频时长</Text><Text style={[styles.itemright]}>观看人数</Text></View>
                  <View style={styles.title}><Text>视频标题</Text></View>
                </View>
                <View onLayout={(evt)=>console.log(1,evt.nativeEvent.layout)} style={[styles.wrapper,styles.paddingLeft5]}>
                  <Image
                    onLayout={(evt)=>console.log(evt.nativeEvent.layout)}
                    style={[styles.img]}
                    source={require('../public/default.png')}
                  />
                  <View style={styles.items}><Text style={[styles.itemleft]}>视频时长</Text><Text style={[styles.itemright]}>观看人数</Text></View>
                  <View style={styles.title}><Text>视频标题</Text></View>
                </View>
              </View>
              <View style={styles.item}>
                <View onLayout={(evt)=>console.log(1,evt.nativeEvent.layout)} style={[styles.wrapper,styles.paddingRight5]}>
                  <Image
                    onLayout={(evt)=>console.log(evt.nativeEvent.layout)}
                    style={[styles.img]}
                    source={require('../public/default.png')}
                  />
                  <View style={styles.items}><Text style={[styles.itemleft]}>视频时长</Text><Text style={[styles.itemright]}>观看人数</Text></View>
                  <View style={styles.title}><Text>视频标题</Text></View>
                </View>
                <View onLayout={(evt)=>console.log(1,evt.nativeEvent.layout)} style={[styles.wrapper,styles.paddingLeft5]}>
                  <Image
                    onLayout={(evt)=>console.log(evt.nativeEvent.layout)}
                    style={[styles.img]}
                    source={require('../public/default.png')}
                  />
                  <View style={styles.items}><Text style={[styles.itemleft]}>视频时长</Text><Text style={[styles.itemright]}>观看人数</Text></View>
                  <View style={styles.title}><Text>视频标题</Text></View>
                </View>
              </View>
            </View>
            <View style={styles.mainv}>
              <TitleWithLine title={'最热课程'}/>
              <View style={styles.item}>
                <View onLayout={(evt)=>console.log(1,evt.nativeEvent.layout)} style={[styles.wrapper,styles.paddingRight5]}>
                  <Image
                    onLayout={(evt)=>console.log(evt.nativeEvent.layout)}
                    style={[styles.img]}
                    source={require('../public/default.png')}
                  />
                  <View style={styles.items}><Text style={[styles.itemleft]}>视频时长</Text><Text style={[styles.itemright]}>观看人数</Text></View>
                  <View style={styles.title}><Text>视频标题</Text></View>
                </View>
                <View onLayout={(evt)=>console.log(1,evt.nativeEvent.layout)} style={[styles.wrapper,styles.paddingLeft5]}>
                  <Image
                    onLayout={(evt)=>console.log(evt.nativeEvent.layout)}
                    style={[styles.img]}
                    source={require('../public/default.png')}
                  />
                  <View style={styles.items}><Text style={[styles.itemleft]}>视频时长</Text><Text style={[styles.itemright]}>观看人数</Text></View>
                  <View style={styles.title}><Text>视频标题</Text></View>
                </View>
              </View>
              <View style={styles.item}>
                <View onLayout={(evt)=>console.log(1,evt.nativeEvent.layout)} style={[styles.wrapper,styles.paddingRight5]}>
                  <Image
                    onLayout={(evt)=>console.log(evt.nativeEvent.layout)}
                    style={[styles.img]}
                    source={require('../public/default.png')}
                  />
                  <View style={styles.items}><Text style={[styles.itemleft]}>视频时长</Text><Text style={[styles.itemright]}>观看人数</Text></View>
                  <View style={styles.title}><Text>视频标题</Text></View>
                </View>
                <View onLayout={(evt)=>console.log(1,evt.nativeEvent.layout)} style={[styles.wrapper,styles.paddingLeft5]}>
                  <Image
                    onLayout={(evt)=>console.log(evt.nativeEvent.layout)}
                    style={[styles.img]}
                    source={require('../public/default.png')}
                  />
                  <View style={styles.items}><Text style={[styles.itemleft]}>视频时长</Text><Text style={[styles.itemright]}>观看人数</Text></View>
                  <View style={styles.title}><Text>视频标题</Text></View>
                </View>
              </View>
            </View>
            <View style={styles.mainv}>
              <TitleWithLine title={'猜你喜欢'}/>
              <View style={styles.item}>
                <View onLayout={(evt)=>console.log(1,evt.nativeEvent.layout)} style={[styles.wrapper,styles.paddingRight5]}>
                  <Image
                    onLayout={(evt)=>console.log(evt.nativeEvent.layout)}
                    style={[styles.img]}
                    source={require('../public/default.png')}
                  />
                  <View style={styles.items}><Text style={[styles.itemleft]}>视频时长</Text><Text style={[styles.itemright]}>观看人数</Text></View>
                  <View style={styles.title}><Text>视频标题</Text></View>
                </View>
                <View onLayout={(evt)=>console.log(1,evt.nativeEvent.layout)} style={[styles.wrapper,styles.paddingLeft5]}>
                  <Image
                    onLayout={(evt)=>console.log(evt.nativeEvent.layout)}
                    style={[styles.img]}
                    source={require('../public/default.png')}
                  />
                  <View style={styles.items}><Text style={[styles.itemleft]}>视频时长</Text><Text style={[styles.itemright]}>观看人数</Text></View>
                  <View style={styles.title}><Text>视频标题</Text></View>
                </View>
              </View>
              <View style={styles.item}>
                <View onLayout={(evt)=>console.log(1,evt.nativeEvent.layout)} style={[styles.wrapper,styles.paddingRight5]}>
                  <Image
                    onLayout={(evt)=>console.log(evt.nativeEvent.layout)}
                    style={[styles.img]}
                    source={require('../public/default.png')}
                  />
                  <View style={styles.items}><Text style={[styles.itemleft]}>视频时长</Text><Text style={[styles.itemright]}>观看人数</Text></View>
                  <View style={styles.title}><Text>视频标题</Text></View>
                </View>
                <View onLayout={(evt)=>console.log(1,evt.nativeEvent.layout)} style={[styles.wrapper,styles.paddingLeft5]}>
                  <Image
                    onLayout={(evt)=>console.log(evt.nativeEvent.layout)}
                    style={[styles.img]}
                    source={require('../public/default.png')}
                  />
                  <View style={styles.items}><Text style={[styles.itemleft]}>视频时长</Text><Text style={[styles.itemright]}>观看人数</Text></View>
                  <View style={styles.title}><Text>视频标题</Text></View>
                </View>
              </View>
            </View>
          </View>

      </View>
      </ScrollView>
    );
  }


  /*
  获取数据
   */
  _getSliderImgs() {
    return fetch(baseUrl+"/json/homepics")
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          sliderImgs: response,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  /*
  路由处理
  */

  _goDetail() {
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

  _goScroll() {
    const {navigator} = this.props; //或者const navigator = this.props.navigator

    if(navigator) {
      navigator.push({
        title: 'Scroll',
        component: Scroll,
        param : {
          age: 19,
          usr: 'juicy'
        }
      })
    }
  }

  _sliderPress = (params) => {
    console.log(params)
  }
}

const baseUrl = "http://123.57.212.58:8012/edu";
const minP = 1/PixelRatio.get();
console.log('minP:'+minP);
console.log('Dimensions:',Dimensions.get('window'));
const imgwidth = Dimensions.get('window').width/2-12.5;
const index = {
  container: {
    backgroundColor: '#f8f8f8',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  //Swiper
  imgContainer: {
    backgroundColor: '#fff',
  },
  slide: {
    backgroundColor: '#fff',
    flex:1,
    resizeMode: Image.resizeMode.stretch,
  },

  //nav
  navs: {
    height: 160*minP,
    paddingHorizontal: 10*minP,
    backgroundColor: '#fff',
  },
  navitem: {
    justifyContent: 'center',
    alignItems: 'stretch',
    marginHorizontal: 10*minP,
    width: 120*minP,
    //borderWidth: 1,
  },
  navimg: {
    width: 80*minP,
    height: 80*minP,
    marginHorizontal: 20*minP,
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

  font18: {
    fontSize: 30*minP,
    color: '#fff',
  },
  font18_black: {
    fontSize: 30*minP,
    color: '#999',
  },
  font14_gray: {
    fontSize: 14*minP,
    color: '#cecece',
  },
};
const styles = {
  mainv: {
    flexDirection: 'column',
    marginTop: 20*minP,
    paddingVertical: 20*minP,
    backgroundColor: '#FFF',
    paddingHorizontal:20*minP,
  },
  paddingLeft5: {
    marginLeft: 5*minP
  },
  paddingRight5: {
    marginRight: 5*minP
  },
  item: {
    flexDirection: 'row',
    overflow: 'hidden',
  },
  wrapper: {
    flex:1,
    overflow: 'hidden',
    top: 20*minP,
    paddingBottom: 60*minP,
  },
  img:{
    flex:1,
    resizeMode: Image.resizeMode.stretch,
    width: imgwidth,
    height: imgwidth/16*9,
  },
  items: {
    position: 'absolute',
    bottom:60*minP,
    left: 0*minP,
    right: 0*minP,
    flexDirection: 'row',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    paddingVertical: 2*minP,
  },
  itemleft: {
    flex:1,
    textAlign:'left',
    fontSize: 26*minP,
    marginLeft: 5*minP,
    color: '#eee'
  },
  itemright: {
    flex:1,
    textAlign:'right',
    fontSize: 26*minP,
    marginRight: 5*minP,
    color: '#eee'
  },
  title: {
    position: 'absolute',
    bottom:15*minP,
    left: 5*minP,
  }
};