import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import firebase from "firebase";
// You can import from local files
import db from "./config";
// or any pure javascript modules available in npm

export default class SignupScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      emailId: "",
      password: "",
      familyName: "",
      name: "",
      contact: "",
      country: "",
      state: "",
      city: "",
      zipCode: "",
    };
  }
  signup = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.emailId, this.state.password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        // ...

        db.collection("user").add({
          email: this.state.emailId,
          familyName: this.state.familyName,
          name: this.state.name,
          country: this.state.country,
          state: this.state.state,
          city: this.state.city,
          zipCode: this.state.zipCode,
          contact: this.state.contact,
          visibility: false,
          description: "",
          numberOfChildren: "",
        });

        alert("User Created");
        this.props.navigation.replace("Home");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
        alert(errorMessage);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Image
            style={styles.logo}
            source={require("./assets/Maria_OSHO-removebg-preview.png")}
          />
          <Text style={styles.heading}>Sign Up</Text>

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
          <Text style={styles.text}>Password</Text>
          <TextInput
            style={styles.textinput}
            placeholder="Enter Your Password"
            secureTextEntry={true}
            onChangeText={(text) => {
              this.setState({
                password: text,
              });
            }}
          />
          <Text style={styles.text}>Family Name</Text>
          <TextInput
            style={styles.textinput}
            placeholder="Family Name"
            onChangeText={(text) => {
              this.setState({
                familyName: text,
              });
            }}
          />
          <Text style={styles.text}>Name</Text>
          <TextInput
            style={styles.textinput}
            placeholder="Name"
            onChangeText={(text) => {
              this.setState({
                name: text,
              });
            }}
          />
          <Text style={styles.text}>Contact</Text>
          <TextInput
            style={styles.textinput}
            placeholder="Contact"
            onChangeText={(text) => {
              this.setState({
                contact: text,
              });
            }}
          />
          <Text style={styles.text}>Country</Text>
          <TextInput
            style={styles.textinput}
            placeholder="U.S.A, India, Canada, etc."
            onChangeText={(text) => {
              this.setState({
                country: text,
              });
            }}
          />
          <Text style={styles.text}>State</Text>
          <TextInput
            style={styles.textinput}
            placeholder="Alabama, Gujurat, Saskatchewan, etc."
            onChangeText={(text) => {
              this.setState({
                state: text,
              });
            }}
          />
          <Text style={styles.text}>City</Text>
          <TextInput
            style={styles.textinput}
            placeholder="Chicago, Chennai, Toronto, etc."
            onChangeText={(text) => {
              this.setState({
                city: text,
              });
            }}
          />
          <Text style={styles.text}>Zip Code</Text>
          <TextInput
            style={styles.textinput}
            placeholder="ex. 74137"
            onChangeText={(text) => {
              this.setState({
                zipCode: text,
              });
            }}
          />
          <TouchableOpacity
            onPress={() => {
              if (
                this.state.emailId && 
                this.state.password &&
                this.state.city &&
                this.state.contact &&
                this.state.country &&
                this.state.familyName &&
                this.state.name && this.state.state && this.state.zipCode
              ) {
                this.signup();
              } else {
                alert("Please fill all the details!");
              }
            }}
            style={styles.login}
          >
            <Text style={styles.logintext}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.replace("Login")}
          >
            <Text
              style={{
                fontWeight: "300",
                marginVertical: 30,
                color: "white",
                alignSelf: "center",
              }}
            >
              {" "}
              Already have an account? Login
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
    height: 250,
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
    marginTop: "5%",
    fontFamily: "Arial",
  },
  textinput: {
    color:'white',
    backgroundColor: "#444444",
    width: "81%",
    height: 30,
    borderRadius: 10,
    marginTop: 5,
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
