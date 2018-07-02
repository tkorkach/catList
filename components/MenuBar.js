import React, { Component } from 'react';
import {Text, View, Button } from 'react-native';

export default class MenuBar extends Component{
    render() {
        return (
            <View style={{flexDirection: 'row', justifyContent: 'flex-end', padding: 10}}>
                <Text>Menu</Text>
            </View>
        );
    }
}