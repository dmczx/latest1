import * as React from 'react';
import {
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator,
  createAppContainer,
} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { BottomNavigation, Text } from 'react-native-paper';
import { Header} from 'react-native-elements';


import { DrawerNavigator, StackNavigator, DrawerItems, SafeAreaView } from 'react-navigation';

import {
  View,
  StyleSheet,
  TextInput,
  Dimensions,
  Button,
  Image,
  AsyncStorage,
  TouchableOpacity,
} from 'react-native';

import { Body } from 'native-base'
import {Container, Content, Left } from 'native-base';

import { Provider } from 'react-redux';
import { Constants } from 'expo';
import SignUp from './SignUp';
import Login from './Login';
import Head from './Head';
import Lis from './Lis';
import Home from './Home';
import LogOut from './LogOut';
import Profile from './Profile';
import { TabNavigator } from 'react-navigation';






const Navegador = DrawerNavigator(
  {
    List: { screen: Lis},
    LogOut: { screen: LogOut },
  },
  {
    
      initialRouteName: 'List',
      drawerPosition: 'left',
      drawerOpenRoute: 'DrawerOpen',
      drawerCloseRoute: 'DrawerClose',
      drawerToggleRoute: 'DrawerToggle',
    drawerWidth: 170,
    drawerBackgroundColor: 'white',
    contentOptions: {
      activeTintColor: '#c60512',
      inactiveTintColor: '#c60512',
      activeBackgroundColor: 'white',
      inactiveBackgroundColor: 'white',
      itemsContainerStyle: {
        marginTop: -48,
      },
      itemStyle: {
        marginTop: 5,
      },
      labelStyle: {
        fontSize: 24,
      },
      iconContainerStyle: {
        backgroundColor: 'blue',
      },
    },
  }
);

const Nav = StackNavigator(
  {
     Liss: { screen: Navegador },
     Home: { screen: Home },
    Login: { screen: Login },
    //LogOut: { screen: LogOut },
    

  });

  Navegador.navigationOptions = { header: null }


// const RootStack = TabNavigator(
//   {
//     List: {
//       screen: Lis,
//     },
//       screen: LogOut,
//       screen: ,
//     },
//   },
//   {
//     initialRouteName: 'List',
//     animationEnabled: true,
//     tabBarOptions: {
//       activeTintColor: 'white',
//       activeBackgroundColor: '#c60512',
//       labelStyle: {
//         fontSize: 20,
//       },
//     },
//   }
// );


export default class Tabs extends React.Component {

  static navigationOptions = {
  //  header: null,
     title: 'Find a doctor',
    headerLeft: null, // <<<back arrow>>>>
    //headerLeft:  <Button title="mmm" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerOpen')} />,
    headerLeft:
    <View style={{paddingLeft:5}}>
        <Button
            title='menu'
            size={30}
            color='white'
            onPress={() => navigate('DrawerOpen')} />
    </View>,
    gesturesEnabled: false, // <<Swiping>>
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
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Navegador/>
    );
  }
}
