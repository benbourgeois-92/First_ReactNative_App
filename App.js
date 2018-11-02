import React from 'react';

import {View, StyleSheet, Text, Button, ListView, StatusBar  } from 'react-native';

export default class App extends React.Component {

  constructor(){
    super();
    this.state = {
      backgroundColor: 'blue'


    }

    this.changeColor = this.changeColor.bind(this);
  }

  changeColor(color){
    this.setState({
      backgroundColor: color
    });
  }
  render (){
    const {backgroundColor} = this.state;
    return (
      <View style= {[styles.container, {backgroundColor}]}>
        

        <Text onPress={() => this.changeColor('green')} style={styles.button}>Green</Text>
        <Text onPress={() => this.changeColor('red')} style={styles.button}>Red</Text>

        <StatusBar hidden={false}/>
        
      </View>
    );
    
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },

  button: {
    borderWidth: 2,
    borderRadius: 10,
    fontSize: 20,
    margin: 10,
    padding: 10,
    
  }

});



/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow


import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>WElCOME!!!!!!!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
 */