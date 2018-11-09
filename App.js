import React from 'react';

import {AsycStorage, StyleSheet,  Button, ListView, StatusBar, Text} from 'react-native';



import ColorButton from "./components/ColorButton.js";
import ColorForm from "./components/ColorForm.js";

export default class App extends React.Component {

  constructor(){
    super();

    this.ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    const availableColors = ['red'];

    this.state = {
      backgroundColor: 'blue',
      availableColors,
      dataSource: this.ds.cloneWithRows(availableColors)

    }

    this.changeColor = this.changeColor.bind(this);
    this.newColor = this.newColor.bind(this);
    this.saveColors = this.saveColors.bind(this);
    
  }

  componentDidMount(){
    AsycStorage.getItem(
      '@ColorListStore:Colors', 
    (err, data) => {
      if (err){
        console.error("Error loading colors", err)
      } else {
        //data is received as a string. JSON.parse turns data into object
        const availableColors = JSON.parse(data);
        this.setState({
          availableColors,
          dataSource: this.ds.cloneWithRows(availableColors)
        });
      }
    });
  }

  saveColors(colors){

    //JSON.stringify transforms an object into string for later extraction with JSON.parse
    // (!)--- appears semi-colon sensitive
    AsycStorage.setItem(
      '@ColorListStore:Colors',
      JSON.stringify(colors)
      )
  }

  changeColor(color){
    this.setState({
      backgroundColor: color
    });
  }

  newColor(color){
    const availableColors = [...this.state.availableColors,
    color];

    this.setState({
      availableColors,
      dataSource: this.ds.cloneWithRows(availableColors)
    });

    this.saveColors(availableColors);
  }



  render (){

    const {backgroundColor} = this.state;

    return (
      <ListView style= {[styles.container, {backgroundColor}]}
        renderHeader={() => (

          <ColorForm onNewColor={this.newColor} />

        )}
        dataSource={this.state.dataSource} 
        renderRow={(color) => (
        <ColorButton backgroundColor={color} onSelect={(color) => this.changeColor(color)}/>
      )} >
        
        
  
    
  
      </ListView>    
      
    );
    
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20

  },

  header: {
    backgroundColor: 'lightgrey',
    paddingTop: 20,
    padding: 10,
    fontSize: 30,
    textAlign: 'center'
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