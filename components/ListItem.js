import React, { Component } from 'react';
import {TextInput, CheckBox, View } from 'react-native';

export default class ListItem extends Component{
    render(){
        return (
            <View style={{flexDirection: 'row'}}>
            <CheckBox/>
            <TextInput
              style={{height: 40, minWidth: 70}}
              placeholder="cat food"
              onChangeText={(text) => this.setState({text})}
            />
          </View>
        )     
    }
}