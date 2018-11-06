import React from 'react';
import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';






//=f=>f is a default placeholder function. onSelect refers to a function, but if a function
//isn't sent it allows the component to still work.

const ColorButton = ({backgroundColor, onSelect=f=>f }) => (

    <TouchableHighlight style={styles.button} onPress={() => onSelect(backgroundColor)} underlayColor="orange">
    <View style={styles.row}>

        <View style={[
          styles.sample, 
          {backgroundColor: backgroundColor},
        ]}/>

        <Text style={styles.text}>{backgroundColor}</Text>

    </View>          
  </TouchableHighlight>


);

const styles = StyleSheet.create({
  
      button: {
        margin: 10,
        padding: 10,
        borderWidth: 2,
        borderRadius: 10,
        
        backgroundColor: 'rgba(255,255,255, .8)'
        
      },
      row: {
        flexDirection: 'row',
        alignItems: 'center'
    
      },
    
      sample: {
        height: 20,
        width: 20,
        borderRadius: 10,
        margin: 5,
        backgroundColor: 'white'
      },
      text: {
    
        fontSize: 30,
        margin: 5,
    
    
    
      }





});

export default ColorButton;