// import React, { Component } from 'react';
// import {
//   View,
//   Text,
//   Image,
//   TouchableHighlight,
//   StyleSheet,
// } from 'react-native';

// export default class ListItem extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       msg: props.data.msg,
//     };

//     this.click2 = this.click.bind(this);
//   }

//   click() {
//     alert("This is page no. "+this.props.data.key);
//   }

//   render() {
//     return (
//       <TouchableHighlight onPress={this.click2} underlayColor="#CCCCCC">
//         <View style={styles.item}>
//           <Image source={{ uri: this.props.data.img }} style={styles.imagem} />
//           <View style={styles.info}>
//             <Text numberOfLines={1} style={styles.nome}>
//               {this.props.data.nome}
//             </Text>
//             <Text numberOfLines={1} style={styles.msg}>
//               {this.state.msg}
//             </Text>
//           </View>
//         </View>
//       </TouchableHighlight>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   item: {
//     height: 60,
//     marginLeft: 10,
//     marginRight: 10,
//     borderBottomWidth: 1,
//     borderColor: '#CCCCCC',
//     flex: 1,
//     flexDirection: 'row',
//   },
//   imagem: {
//     width: 40,
//     height: 40,
//     marginTop: 10,
//     borderRadius: 20,
//   },
//   info: {
//     flex: 1,
//     flexDirection: 'column',
//     justifyContent: 'center',
//     marginLeft: 10,
//   },
//   nome: {
//     fontSize: 15,
//     fontWeight: 'bold',
//   },
// });


export default [{
  id: 1,
  user: {
    name: 'Abdulaziz',
  },
  MedicalSpecialty: 'Dentist',
  Education: 'KSU',
  Clinic: 'King Khaled University Hospital',
  ClinicPhoneNumber: '9200****',
  img: 'https://bootdey.com/img/Content/avatar/avatar6.png',

}, {
  id: 2,
  user: {
    name: 'Abdulrhman'
  },
  MedicalSpecialty: 'orthodontic',
  Education: 'KSU',
  Clinic: 'King Khaled University Hospital',
  ClinicPhoneNumber: '9200****',
  img: 'https://bootdey.com/img/Content/avatar/avatar6.png',

}, {
  id: 3,
  user: {
    name: 'Osamh'
  },
  MedicalSpecialty: 'Family medicine',
  Education: 'KSU',
  Clinic: 'King Khaled University Hospital',
  ClinicPhoneNumber: '9200****',
  img: 'https://bootdey.com/img/Content/avatar/avatar6.png',

}
  , {
    
  id: 4,
  user: {
    name: 'Mohammed'
  },
  MedicalSpecialty: 'pediatric medicine',
  Education: 'KSU',
  Clinic: 'King Khaled University Hospital',
  ClinicPhoneNumber: '9200****',
  img: 'https://bootdey.com/img/Content/avatar/avatar6.png',

}
,{
  id: 5,
  user: {
    name: 'Saud'
  },
  MedicalSpecialty: 'Oncology',
  Education: 'KSU',
  Clinic: 'King Khaled University Hospital',
  ClinicPhoneNumber: '9200****',
  img: 'https://bootdey.com/img/Content/avatar/avatar6.png',
},
{
    
  id: 6,
  user: {
    name: 'Toman'
  },
  MedicalSpecialty: 'Allergy and immunology',
  Education: 'KSU',
  Clinic: 'King Khaled University Hospital',
  ClinicPhoneNumber: '9200****',
  img: 'https://bootdey.com/img/Content/avatar/avatar6.png',
},
{
    
  id: 7,
  user: {
    name: 'Ahmed'
  },
  MedicalSpecialty: 'Hematology',
  Education: 'KSU',
  Clinic: 'King Khaled University Hospital',
  ClinicPhoneNumber: '9200****',
  img: 'https://bootdey.com/img/Content/avatar/avatar6.png',
},
{
    
  id: 8,
  user: {
    name: 'Khalid'
  },
  MedicalSpecialty: 'General Practitioner',
  Education: 'KSU',
  Clinic: 'King Khaled University Hospital',
  ClinicPhoneNumber: '9200****',
  img: 'https://bootdey.com/img/Content/avatar/avatar6.png',
},
{
    
  id: 9,
  user: {
    name: 'Yousef'
  },
  MedicalSpecialty: 'Forensic Medicine',
  Education: 'KSU',
  Clinic: 'King Khaled University Hospital',
  ClinicPhoneNumber: '9200****',
  img: 'https://bootdey.com/img/Content/avatar/avatar6.png',

},
{
    
  id: 10,
  user: {
    name: 'Nasser'
  },
   MedicalSpecialty: 'Anatomy',
   Education: 'KSU',
  Clinic: 'King Khaled University Hospital',
  ClinicPhoneNumber: '9200****',
  img: 'https://bootdey.com/img/Content/avatar/avatar6.png',
},
{
    
  id: 11,
  user: {
    name: 'Omar'
  },
  MedicalSpecialty: 'Pediatrics',
  Education: 'KSU',
  Clinic: 'King Khaled University Hospital',
  ClinicPhoneNumber: '9200****',
  img: 'https://bootdey.com/img/Content/avatar/avatar6.png',
},
]