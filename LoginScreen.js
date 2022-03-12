import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  TextInput,
  ScrollView
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import firebase from "firebase";
// You can import from local files

// or any pure javascript modules available in npm

export default class LoginScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      emailId: "",
      password: "",
    };
  }
  login = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.emailId, this.state.password)
      .then((userCredential) => {
        // Signed in
        alert("Welcome Back");
        this.props.navigation.replace("Home");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
      });
  };
  render() {
    return ( 
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{flex:1}}>
        <Image
          style={styles.logo}
          source={require("./assets/Maria_OSHO-removebg-preview.png")}
        />
        <Text style={styles.heading}>Log in</Text>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => Alert.alert("Work in Progress")}
        >
          <AntDesign style={{}} name="google" size={16} color="white" />
          <Text style={styles.googleText}>Login with Google</Text>
        </TouchableOpacity>
        <Text style={styles.text}>Email</Text>
        <TextInput
          style={styles.textinput}
          placeholderTextColor="white"
          placeholder="johndoe@gmail.com"
          keyboardType="email-address"
          onChangeText={(text) => {
            this.setState({
              emailId: text,
            });
          }}
        />
        <Text style={styles.text}>Password</Text>
        <TextInput
          style={styles.textinput}
          placeholderTextColor="white"
          placeholder="Enter Your Password"
          secureTextEntry={true}
          onChangeText={(text) => {
            this.setState({
              password: text,
            });
          }}
        />

<TouchableOpacity
          onPress={() => this.props.navigation.navigate("ForgotPassword")}
        >
          <Text style={styles.signup}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            if (this.state.emailId && this.state.password) {
              this.login();
            } else {
              alert("Please fill all the details!");
            }
          }}
          style={styles.login}
        >
          <Text style={styles.logintext}>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.replace("Signup")}
        >
          <Text
            style={{
              fontWeight: "300",
              marginTop: 30,
              color: "white",
              alignSelf: "center",
            }}
          >
            {" "}
            Dont have an account? Sign Up
          </Text>
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
  logo: {
    alignSelf: "center",
    width: "60%",
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
    width: "80%",
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5%",
    flexDirection: "row",
  },
  googleText: {
    color: "white",
    fontFamily: "Arial",
    marginLeft: 10,
  },
  text: {
    color: "white",
    marginLeft: "10%",
    marginTop: "5%",
    fontFamily: "Arial",
  },
  textinput: {
    color:'white',
    backgroundColor: "#444444",
    width: "81%",
    height: "6%",
    borderRadius: 10,

    marginTop: "3%",
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
    marginTop: "10%",
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
