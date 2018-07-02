import React, { Component } from 'react';
import { AppRegistry, TextInput, View, Image } from 'react-native';
import ListItem from './components/ListItem.js';
import MenuBar from './components/MenuBar.js';

export default class ShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    let pic = {
      uri: 'https://www.cats.org.uk/uploads/images/news/9ca9318d-961d-4c7d-9dc0-6c2502a79f86.jpg'
    };
    return (
    <View style={{flexDirection: 'column'}}>
      <MenuBar/>
      <View style={{flexDirection: 'column'}}>      
        <View>
            <TextInput
            style={{height: 50, fontSize: 24, padding: 10}}
            placeholder="Cats shopping list"
            onChangeText={(text) => this.setState({text})}
          />
        </View>
        <View>
          <ListItem/>
          <ListItem/>
          <ListItem/>
        </View>
        <Image source={pic} style={{width: 200, height: 200}}/>
      </View>
    </View>
    );
  }
}