import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, CheckBox, View } from 'react-native';

export default class ShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={{flexDirection: 'column'}}>      
        <View>
            <TextInput
            style={{height: 40, fontSize: 24}}
            placeholder="Title"
            onChangeText={(text) => this.setState({text})}
          />
        </View>
        <View style={{flexDirection: 'row', padding: 10}}>
          <CheckBox/>
          <TextInput
            style={{height: 40}}
            placeholder="your shopping item"
            onChangeText={(text) => this.setState({text})}
          />
        </View>
      </View>
    );
  }
}