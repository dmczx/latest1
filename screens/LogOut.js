import React, { Component } from 'react';
import {
  View,
  AppRegistry,
  TextInput,
  Text,
  StyleSheet,
  AsyncStorage,
  Image,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Icon, Button, Container, Header, Content, Left } from 'native-base';


import { Provider } from 'react-redux';
import { Constants } from 'expo';
import Home from './Home';
import SignUp from './SignUp';
import Login from './Login';
import Lis from './Lis';
import { TabNavigator } from 'react-navigation';



export default class LogOut extends Component {

  // static navigationOptions = ({ navigation }) => ({
  //   title: "Home",
  //   headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerOpen')} />,
  //   drawerLabel: 'Settings',
 
  // })

  render() {
    const { navigate } = this.props.navigation;


    return (
      
      
        <Text> Hello  </Text>


    );
  }

}
