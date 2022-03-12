import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Switch,
} from 'react-native';

import firebase from 'firebase';
import db from './config';
// You can import from local files

// or any pure javascript modules available in npm

export default class SettingsScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      city: '',
      country: '',
      description: '',
      numberOfChildren: '',
      state: '',
      visibility: '',
      zipCode: '',
      emailId: '',
      name: '',
      familyName: '', 
      address: '', 
      contact: '',
      docId: '',
      isEnabled: false, 
    };
  }
  
  getUserDetails = () => {
    var email = firebase.auth().currentUser.email;
    db.collection('user')
      .where('email', '==', email)
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          var data = doc.data();
          this.setState({
            city: data.city,
            country: data.country,
            description: data.description,
            numberOfChildren: data.numberOfChildren,
            state: data.state,
            visibility: data.visibility,
            zipCode: data.zipCode,
            emailId: data.email,
            name: data.name,
            familyName: data.familyName,
            contact: data.contact,
            docId: doc.id,
          });
        });
      });
  };
  updateUserDetails = () => {
    db.collection('user')
      .doc(this.state.docId) 
      .update({
        city: this.state.city,
        country: this.state.country,
        description: this.state.description,
        numberOfChildren: this.state.numberOfChildren,
        state: this.state.state, 
        visibility: this.state.visibility, 
        zipCode: this.state.zipCode,
        name: this.state.name, 
        familyName: this.state.familyName,
        contact: this.state.contact,
      })
      .then(() => {
        alert('Profile Updated Successfully');
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  componentDidMount() {
    this.getUserDetails();
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.heading}>Settings</Text>
          <Text style={styles.text}>Email</Text>
          <TextInput
            style={styles.textinput}
            placeholder={'Email'}
            editable={false}
            onChangeText={(text) => {
              this.setState({
                emailId: text,
              });
            }}
            value={this.state.emailId}
          />
          <Text style={styles.text}>Family Name</Text>
          <TextInput
            style={styles.textinput}
            placeholder={'Family Name'}
            multiline={true}
            onChangeText={(text) => {
              this.setState({
                familyName: text,
              });
            }}
            value={this.state.familyName}
          />
          <Text style={styles.text}>Number of Children</Text>
          <TextInput
            style={styles.textinput}
            placeholder={'Number Of Children'}
            multiline={true}
            onChangeText={(text) => {
              this.setState({
                numberOfChildren: text,
              });
            }}
            value={this.state.numberOfChildren}
          />
          <Text style={styles.text}>Name</Text>
          <TextInput
            style={styles.textinput}
            placeholder={'Name'}
            multiline={true}
            onChangeText={(text) => {
              this.setState({
                name: text,
              });
            }}
            value={this.state.name}
          />
          <Text style={styles.text}>Contact</Text>
          <TextInput
            style={styles.textinput}
            placeholder={'Contact'}
            onChangeText={(text) => {
              this.setState({
                contact: text,
              });
            }}
            value={this.state.contact}
          />
          <Text style={styles.text}>City</Text>
          <TextInput
            style={styles.textinput}
            placeholder={'City'}
            onChangeText={(text) => {
              this.setState({
                city: text,
              });
            }}
            value={this.state.city}
          />
          <Text style={styles.text}>State</Text>
          <TextInput
            style={styles.textinput}
            placeholder={'State'}
            multiline={true}
            onChangeText={(text) => {
              this.setState({
                state: text,
              });
            }}
            value={this.state.state}
          />
          <Text style={styles.text}>Country</Text>
          <TextInput
            style={styles.textinput}
            placeholder={'Country'}
            onChangeText={(text) => {
              this.setState({
                country: text,
              });
            }}
            value={this.state.country}
          />
          <Text style={styles.text}>Description</Text>
          <TextInput
            style={styles.textinput}
            placeholder={'Description'}
            multiline={true}
            onChangeText={(text) => {
              this.setState({
                description: text,
              });
            }}
            value={this.state.description}
          />
          <Text style={styles.text}>Zip Code</Text>
          <TextInput
            style={styles.textinput}
            placeholder={'Zip Code'}
            multiline={true}
            onChangeText={(text) => {
              this.setState({
                zipCode: text,
              });
            }}
            value={this.state.zipCode}
          />
          <Text style={styles.text}>Make your profile visible to parents in your state?</Text>
          <Switch
            trackColor={{ false: 'gray', true: 'lightblue' }} // Switch Button Component
            thumbColor={this.state.visibility ? 'gray' : 'white'}
            ios_backgroundColor="lightblue"
            onValueChange={(value) => {
              this.setState({
                visibility: value,
              });
            }}
            value={this.state.visibility} 
            style={{alignSelf:'center'}}
          />
          <TouchableOpacity
            style={styles.login}
            onPress={() => {
              this.updateUserDetails();
            }}>
            <Text style={styles.logintext}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.login}
            onPress={() => {
              firebase
                .auth()
                .signOut()
                .then(() => {
                  this.props.navigation.replace('Login');
                })
                .catch((error) => {
                  // An error happened.
                  alert('error happened');
                });
            }}>
            <Text style={styles.logintext}>Logout</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  
  heading: {
    color: "white",
    marginLeft: "10%",
    fontWeight: "bold",
    marginTop:'15%',
    fontSize: 25,
  },
  
  text: {
    color: "white",
    marginLeft: "10%",
    marginTop: 15,
    fontFamily: "Arial",
  },
  textinput: {
    color:'white',
    backgroundColor: "#444444",
    width: "81%",
    height: 40,
    borderRadius: 10,
    marginTop:5,
    alignSelf: "center",
    paddingLeft: 10,
  },
  login: {
    alignSelf: "center",
    backgroundColor: "#8456B1",
    width: "81%",
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    flexDirection: "row",
  },
  logintext: {
    color: "white",
    fontWeight:'bold',
    fontFamily: "Arial",
  },
  signup: {
    color: "white",
    fontWeight:'400',
    fontFamily: "Arial", 
    fontSize: 13,
    alignSelf:'flex-end',
    marginRight:'10%', marginTop:10
  },
});
