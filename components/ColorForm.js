import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput
} from 'react-native';
import PropTypes from 'prop-types';

export default class ColorForm extends React.Component {

    constructor(){
        super();

        this.state = {
            txtColor: '',


        }

        this.submit = this.submit.bind(this);

    }

    submit(){
        this.props.onNewColor(this.state.txtColor.toLowerCase());
        this.setState({txtColor: ''});




    }

    render(){
        return (
            <View style={styles.container}>

                <TextInput value={this.state.txtColor} style={styles.txtInput} onChangeText={(txtColor) => this.setState({txtColor})} placeholder="Enter a color"/>
                <Text style={styles.button} onPress={this.submit}>Add</Text>
            
            </View>
        )
    }


    
}

ColorForm.propTypes = {
        onNewColor: PropTypes.func.isRequired
    }
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'lightgrey',
        height: 50,
        justifyContent: 'space-around',
        paddingTop: 20,
        height: 70
    },
    txtInput: {

        flex: 1,
        margin: 5,
        padding: 5,
        borderWidth: 2,
        fontSize: 20,
        borderRadius: 5,
        backgroundColor: 'snow'

    },
    button: {
        backgroundColor: 'darkblue',
        margin: 5,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: 20



    }
});