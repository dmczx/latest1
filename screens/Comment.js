import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import {Constants} from 'expo';
import * as firebase from 'firebase';

import { db } from './config/db';
 
export default class comment extends Component{
  static navigationOptions = {
    title: 'Comments',
  //  headerLeft: null, // <<<back arrow>>>>
    //gesturesEnabled: false, // <<Swiping>>
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#c60512',
      borderBottomColor: '#c60512',
      borderBottomWidth: 1,
    },
    headerTitleStyle: {
      fontSize: 24,
    },
  };

  constructor(props) {
    super(props)

    this.state = {
      message: '',
      messages: []
    }

    this.addItem = this.addItem.bind(this);
  }

  componentDidMount() {
    firebase
      .database()
      .ref()
      .child("messages")
      .once("value", snapshot => {
        const data = snapshot.val()
        if (snapshot.val()) {
          const initMessages = [];
          Object
            .keys(data)
            .forEach(message => initMessages.push(data[message]));
          this.setState({
            messages: initMessages
          })
        }
      });

    firebase
      .database()
      .ref()
      .child("messages")
      .on("child_added", snapshot => {
        const data = snapshot.val();
        if (data) {
          this.setState(prevState => ({
            messages: [data, ...prevState.messages]
          }))
        }
      })

  }

  addItem () {
    if (!this.state.message) return;

    const newMessage = firebase.database().ref()
                          .child("messages")
                          .push();
    newMessage.set(this.state.message, () => this.setState({message: ''}))
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.msgBox}>
          <TextInput placeholder='add your comment'
            value={this.state.message}
            onChangeText={(text) => this.setState({message: text})}
            style={styles.txtInput}/>
          <Button 
          title='add'
          color="#c60512"
          onPress={this.addItem}/>
        </View>
        <FlatList data={this.state.messages}
          renderItem={
            ({item}) => 
            <View style={styles.listItemContainer}>
              <Text style={styles.listItem}>
                {item}
              </Text>
            </View>
          }
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  msgBox: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: '#fff'
  },
  txtInput: {
    flex: 1,
    borderWidth: 2,  // size/width of the border
    borderColor: 'lightgrey',  // color of the border
    paddingLeft: 10
  },
  listItemContainer: {
    backgroundColor: '#fff',
    margin: 2,
    height: 50,
    borderRadius: 5
  },
  listItem: {
    fontSize: 16,
    padding: 10,
    color:"#c60512"
  }
});
