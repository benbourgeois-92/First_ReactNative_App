import React from 'react';

import {ScrollView, StyleSheet,  Button, ListView, StatusBar, } from 'react-native';

import ColorButton from "./components/ColorButton.js";

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
      <ScrollView style= {[styles.container, {backgroundColor}]}>
        
        <ColorButton backgroundColor="red" onSelect={(color) => this.changeColor(color)}/>
        <ColorButton backgroundColor="blue" onSelect={(color) => this.changeColor(color)}/>
        <ColorButton backgroundColor="green" onSelect={(color) => this.changeColor(color)}/>

        <ColorButton backgroundColor="salmon" onSelect={(color) => this.changeColor(color)}/>
        <ColorButton backgroundColor="skyblue" onSelect={(color) => this.changeColor(color)}/>
        <ColorButton backgroundColor="azure" onSelect={(color) => this.changeColor(color)}/>


        <ColorButton backgroundColor="purple" onSelect={(color) => this.changeColor(color)}/>
        <ColorButton backgroundColor="black" onSelect={(color) => this.changeColor(color)}/>
        <ColorButton backgroundColor="brown" onSelect={(color) => this.changeColor(color)}/>

         <ColorButton backgroundColor="darkgreen" onSelect={(color) => this.changeColor(color)}/>
        <ColorButton backgroundColor="blueViolet" onSelect={(color) => this.changeColor(color)}/>
        <ColorButton backgroundColor="CornflowerBlue" onSelect={(color) => this.changeColor(color)}/>
        <StatusBar hidden={false}/>
        
      </ScrollView>
    );
    
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20

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