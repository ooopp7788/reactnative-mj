'use strict'
import React, { Component } from 'react';
import  {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
var NUM_ITEMS = 20;
var PerfectProject = React.createClass({
  Statics: {
    titles: '<ScrollView>',
    description: 'Component that enable scrolling through child component',
  },
  makeItems: function(nItems: number, styles) : Array<any> {
    var items = [];
    for (var i=0;i<nItems;i++){
      items[i] = (
        <TouchableOpacity key={i} style={styles}>
          <Text style={{fontSize:20 }}>{'Item text' + i}</Text>
        </TouchableOpacity>
      );
    }
    return items;
  },

  render: function(){
    var items = this.makeItems(NUM_ITEMS,styles.itemWrapper);
    items[4] = (
      <ScrollView  key={'ScrollView'} horizontal={true}>
        {this.makeItems(NUM_ITEMS,[styles.itemWrapper,styles.horizontalItemWrapper])}
      </ScrollView>
    );

    var verticalScrollView=(
      <ScrollView style={styles.verticalScrollView}>
        {items}
      </ScrollView>
    );
    return verticalScrollView;
  },
});
var styles = StyleSheet.create({
  itemWrapper: {
    backgroundColor: '#dddddd',
    alignItems: 'center',
    borderWidth: 5,
    borderColor: 'red',
    borderRadius: 5,
    padding: 30,
    margin: 5,
  },
  horizontalItemWrapper: {
    padding: 50,
  },
  verticalScrollView:{
    backgroundColor: 'aquamarine',
    margin: 10,
  },
});

module.exports = PerfectProject;