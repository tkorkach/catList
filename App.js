import React, { Component } from 'react';
import { AppRegistry, TextInput, View, ScrollView, Image, Dimensions, Button, Alert } from 'react-native';
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
    <View style={{display: 'flex', flexDirection: 'column', height: Dimensions.get('window').height}}>
      <MenuBar/>
      <View style={{flexGrow: 1}}>    
          <View style={{flexDirection: 'row'}}>
              <TextInput
              style={{height: 50, fontSize: 24, padding: 10}}
              placeholder="Cats shopping list"
              onChangeText={(text) => this.setState({text})}
            />
            <Button
            onPress={() => {
              Alert.alert('You tapped the button!');
            }}
            title="Save"
            style={{padding: 10}}
          />
          </View>
          <ScrollView style={{flexGrow: 1}}>
            <ListItem/>
            <ListItem/>
            <ListItem/>
          </ScrollView>  
      </View>
      <View>
        <Image source={pic} style={{width: 200, height: 200}}/>
      </View>
    </View>
    );
  }
}