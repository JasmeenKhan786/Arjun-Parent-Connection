import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import firebase from "firebase";
import { Ionicons } from "@expo/vector-icons";
// You can import from local files

// or any pure javascript modules available in npm

export default class ForgotpasswordScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      emailId: "",
      password: "",
    };
  }
  render() {
    return (
      <View style={styles.container}>

        <View style={{ flexDirection: "row", marginTop: "15%" }}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.goBack();
            }}
            style={{ marginLeft: "10%" }}
          >
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 20,
              marginLeft: 20,
            }}
          >
            Forgot Password
          </Text>
        </View>

        
        <Text style={styles.text}>Email</Text>
        <TextInput
          style={styles.textinput}
          placeholder="johndoe@gmail.com"
          keyboardType="email-address"
          onChangeText={(text) => {
            this.setState({
              emailId: text,
            });
          }}
        />
        <TouchableOpacity
          style={styles.login}
          onPress={() => {
            if(this.state.emailId){
              firebase
              .auth()
              .sendPasswordResetEmail(this.state.emailId)
              .then(() => {
                // Password reset email sent!
                alert("Reset email sent");
                // ..
              })
              .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                // ..
                alert(errorMessage);
              });
            }
            else{
              alert('Please fill a valid email id!')
            }
           
          }}
        >
          <Text style={styles.logintext}>Reset Password</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  logo: {
    alignSelf: "center",
    width: "40%",
    height: "40%",
  },
  heading: {
    color: "white",
    marginLeft: "10%",
    fontWeight: "bold",
    fontSize: 25,
  },
  buttons: {
    alignSelf: "center",
    backgroundColor: "#444444",
    width: "81%",
    height: "6%",
    borderRadius: 10,

    marginTop: "5%",
    flexDirection: "row",
  },
  googleText: {
    color: "white",
    marginLeft: "3%",
    marginTop: "3%",
    fontFamily: "Arial",
  },
  text: {
    color: "white",
    marginLeft: "10%",
    marginTop: "15%",
    fontFamily: "Arial",
  },
  textinput: {
    color:'white',
    backgroundColor: "#444444",
    width: "81%",
    height: 40,
    borderRadius: 10,

    marginTop: "3%",
    alignSelf: "center",
    padding: "3%",
  },
  login: {
    alignSelf: "center",
    backgroundColor: "#8456B1",
    width: "81%",
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10%",
    flexDirection: "row",
  },
  logintext: {
    color: "white",
    fontWeight: "bold",
    fontFamily: "Arial",
  },
  signup: {
    color: "white",
    marginLeft: "30%",
    marginTop: "3%",
    fontFamily: "Arial",
    fontSize: 10,
  },
});
