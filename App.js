import * as React from 'react';
import { StackNavigator, createStackNavigator } from 'react-navigation';

import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Dimensions,
  Button,
  Image,
} from 'react-native';
import { Provider } from 'react-redux';
import { Constants } from 'expo';
import SignUp from './screens/SignUp';
import Login from './screens/Login';
import Lis from './screens/Lis';
import Home from './screens/Home';
import Tabs from './screens/Tabs';
import LogOut from './screens/LogOut';
import Profile from './screens/Profile';
import comment from './screens/Comment';

export default App = createStackNavigator(
  {
  
    Home: { screen: Home },
    SignUp: { screen: SignUp },
    //Tabs: { screen: Tabs },
    Login : { screen :Login},
    LogOut: { screen: LogOut },
    Lis: { screen: Lis },
    Profile:{screen: Profile},
    Comment : {screen: comment},
  }
  );
  //   {
  //     mode: 'modal',
  //     headerMode: 'none',
  //     defaultNavigationOptions: {
  //       gesturesEnabled: false, // Disable Swipe Gesture
  //     },
  //     transitionConfig: () => ({
  //       transitionSpec: {
  //         duration: 0, // Disable Transition Animation
  //       },
  //     }),
  //   }
  // );

