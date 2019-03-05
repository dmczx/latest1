import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  ListView
} from 'react-native';

import { PricingCard,Icon } from 'react-native-elements';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { Card } from 'react-native-elements';
import {List,ListItem} from 'native-base';
import { Button } from 'react-native-elements';
import emails from './ListItem';
import Lis from './Lis';

var data=["h","jj"];

export default class Profile extends Component {
  static navigationOptions = {
    title: 'ProfilePage',
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

     this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
     

    this.state = {
       ListViewData: data,
       newContent:"" 
    }
}

  render() {
    const { navigate } = this.props.navigation;
    const user = this.props.navigation.getParam('user');
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.header} />
          <Image
            style={styles.avatar}
            source={{
              uri: 'https://bootdey.com/img/Content/avatar/avatar6.png',
            }}
          />
          <View style={styles.body}>
            <Text style={styles.name}>{ user.user.name }</Text>

            <Text style={styles.description}>{ user.MedicalSpecialty }</Text>
            

            <Card title="Education">
              <Text style={{ marginBottom: 10 }}> {user.Education} </Text>
            </Card>

            <Card title="clinic">
              <Text style={{ marginBottom: 10 }}> {user.Clinic} </Text>
            </Card>

            <Card title="contact">
              <Text style={{ marginBottom: 10 }}> {user.ClinicPhoneNumber} </Text>
            </Card>

            <Button
             style={styles.bt}
            onPress={() => {
              navigate('Comment'); }} 
              title = 'Comments'
              color =  'white'
               backgroundColor =  '#c60512'
           />
        

            {/* <Rating
  showRating
  onFinishRating={this.ratingCompleted}
  style={{ paddingVertical: 10 }}
/> */}


            {/* <Rating
               showRating
              onFinishRating={this.ratingCompleted}
             style={{ paddingVertical: 10 }}
           />

            <PricingCard
              color="#c60512"
              title="price:"
              titleStyle={{ fontSize: 25 }}
              price="$100"
             button={{ title: 'book now' }}
            />  */}

          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#c60512',
    height: 100,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 30,
  },
  name: {
    fontSize: 22,
    color: 'black',
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 40,
  },
  body: {
    marginTop: 40,
  },
  bt: {
    marginTop: 20,
  },
  description: {
    fontSize: 16,
    color: '#c60512',
    marginTop: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
