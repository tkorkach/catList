import React, { Component } from 'react';
import { AppRegistry, TextInput, View } from 'react-native';
import ListItem from './components/ListItem.js';
import MenuBar from './components/MenuBar.js';

export default class ShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
    <View style={{flexDirection: 'column'}}>
      <MenuBar/>
      <View style={{flexDirection: 'column'}}>      
        <View>
            <TextInput
            style={{height: 40, fontSize: 24}}
            placeholder="Title"
            onChangeText={(text) => this.setState({text})}
          />
        </View>
        <ListItem/>
        <ListItem/>
        <ListItem/>
      </View>
    </View>
    );
  }
}