// import * as React from 'react';
// import {
//   createStackNavigator,
//   createSwitchNavigator,
//   createBottomTabNavigator,
//   DrawerNavigator,
// } from 'react-navigation';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// import {
//   Text,
//   View,
//   StyleSheet,
//   TextInput,
//   Dimensions,
//   Button,
//   Image,
// } from 'react-native';
// import { Provider } from 'react-redux';
// import { Constants } from 'expo';
// import { Platform, FlatList } from 'react-native';
// import SignUp from './SignUp';
// import Login from './Login';
// import ListItem from './ListItem';
// import Head from './Head';
// import { TabNavigator } from 'react-navigation';

// export default class Lis extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       list: [
//         {
//           key: '1',
//           img: 'https://www.b7web.com.br/avatar2.png',
//           nome: 'Osamh alyahya',
//           msg: 'Hi',
//         },
//         {
//           key: '2',
//           img: 'https://www.b7web.com.br/avatar2.png',
//           nome: 'Mohanad',
//           msg: ' Hello?',
//         },
//         {
//           key: '3',
//           img: 'https://www.b7web.com.br/avatar2.png',
//           nome: 'Ali',
//           msg: '..',
//         },
//         {
//           key: '4',
//           img: 'https://www.b7web.com.br/avatar2.png',
//           nome: 'Azoz',
//           msg: 'Oi',
//         },
//         {
//           key: '5',
//           img: 'https://www.b7web.com.br/avatar2.png',
//           nome: 'Toman',
//           msg: 'Xa',
//         },
//         {
//           key: '6',
//           img: 'https://www.b7web.com.br/avatar2.png',
//           nome: 'Dr.Fazal',
//           msg: 'Ok',
//         },
//         {
//           key: '7',
//           img: 'https://www.b7web.com.br/avatar2.png',
//           nome: 'z',
//           msg: 'rate',
//         },
//         {
//           key: '8',
//           img: 'https://www.b7web.com.br/avatar2.png',
//           nome: 'Dr.wadood',
//           msg: 'b',
//         },
//         {
//           key: '9',
//           img: 'https://www.b7web.com.br/avatar2.png',
//           nome: 'Fazal',
//           msg: 'wh',
//         },
//         {
//           key: '10',
//           img: 'https://www.b7web.com.br/avatar2.png',
//           nome: 'Dr.Fazal',
//           msg: 'k',
//         },
//         {
//           key: '11',
//           img: 'https://www.b7web.com.br/avatar2.png',
//           nome: 'l',
//           msg: 'O',
//         },
//         {
//           key: '12',
//           img: 'https://www.b7web.com.br/avatar2.png',
//           nome: 'Dr',
//           msg: 'Oy',
//         },
//       ],
//       searchTerm: '',
//     };
//   }

//   static navigationOptions = {
//     // title: 'Find a doctor',
//     title: 'List',
//     headerTintColor: 'white',
//     headerLeft: null,
//     gesturesEnabled: false,
//     headerStyle: {
//       backgroundColor: '#42A5F5',
//       borderBottomColor: '#42A5F5',
//       borderBottomWidth: 1,
//     },
//     headerTitleStyle: {
//       fontSize: 24,
//     },
//   };

//   render() {
//     return (
//       <View>
//         <View style={styles.container}>
//           <FlatList
//             data={this.state.list}
//             renderItem={({ item }) => <ListItem data={item} />}
//           />
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 2,
//     paddingLeft: 10,
//     paddingRight: 10,
//     paddingBottom: 2,
//     fontSize: 14,
//     fontWeight: 'bold',
//     backgroundColor: 'rgba(247,247,247,1.0)',
//   },
// });

import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity,Image, Button} from 'react-native';
import SearchInput, { createFilter } from 'react-native-search-filter';
import emails from './ListItem';
import * as firebase from 'firebase';

const KEYS_TO_FILTERS = ['user.name', 'subject'];
 
export default class Lis extends Component{

 
  state = { currentUser: null }


  componentDidMount() {
    const { currentUser } = firebase.auth()
    this.setState({ currentUser })
  }
  signOutUser = async () => {
    try {
        firebase.auth().signOut();
        navigate('Home');
    } catch (e) {
        console.log(e);
    }
  }

  static navigationOptions = ({ navigation }) => ({  
      title: 'Doctors List',
    headerLeft:
    <View style={{paddingLeft:0}}>
        <Button
            title='LogOut'
            size={30}
            color='white'
            onPress={() => {
              try {
                firebase.auth().signOut();
                navigate('Home');
              } catch (e) {
                  console.log(e);
              }
            }} />
    </View>,
    headerRight:
    <View style={{paddingLeft:5}}>
        <Button
            title='Profile'
            size={30}
            color='white'
            onPress={() => navigation.navigate('Profile')} />
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
   });
    constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    }
  }
  searchUpdated(term) {
    this.setState({ searchTerm: term })
  }
  render() {
    const { currentUser } = this.state
    const { staticAssestsLoaded ,  authStatusReported , isUserAuthenticated } = this.state;
    const { navigate } = this.props.navigation;
    const filteredEmails = emails.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
    return (
      <View style={styles.container}>

         {/* <Text>   Hi {currentUser && currentUser.email}! </Text> */}

       
         
        <SearchInput 
          onChangeText={(term) => { this.searchUpdated(term) }} 
          style={styles.searchInput}
          placeholder="Type a doctor name or specialist"
          />
        <ScrollView>
          {filteredEmails.map(email => {
            return (
              <TouchableOpacity onPress={()=> navigate(
                'Profile',
                { user: email}
              )}
              key={email.id} style={styles.emailItem}>
                <View>
                  <Image source={email.img} />
                  <Text>{email.user.name}</Text>
                  <Text style={styles.emailSubject}>{email.MedicalSpecialty}</Text>
                </View>
              </TouchableOpacity>
            )
          })}
        </ScrollView>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 10,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
    justifyContent: 'flex-start',
    flex:1
  },   
  //  justi/fyContent: 'flex-start'

  emailItem:{
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    padding: 20,
  },
  emailSubject: {
    color: 'red',
        marginTop:5,

  },
  searchInput:{
    padding: 5,
    borderColor: '#CCC',
    borderWidth: 5,
    marginTop:0,
    fontWeight:'bold'

  }
});
