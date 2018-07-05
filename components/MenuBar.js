import React, { Component } from 'react';
import {View, Image } from 'react-native';

export default class MenuBar extends Component{
    render() {
        return (
            <View style={{flexDirection: 'row', marginTop: 20}}>
              <Image
                source={require('../images/menuIcon.png')} 
                style={{width: 30, height: 30, padding: 10}}
               />   
            </View>
        );
    }
}