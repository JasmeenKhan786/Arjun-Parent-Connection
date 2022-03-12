import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import firebase from "firebase";
// You can import from local files
import db from "./config";
// or any pure javascript modules available in npm

export default class AddEventsScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      time: "",
      location: "",
      notes: "",
    };
  }
  addData = () => {
    db.collection("ideas").add({
      title: this.state.title,
      time: this.state.time,
      location: this.state.location,
      notes: this.state.notes,
      email: firebase.auth().currentUser.email,
    });
    alert("Activity Added!");
    this.props.navigation.navigate("UpcomingEvents");
  };
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
            Add Event
          </Text>
        </View>
        <Text style={styles.text}>Title</Text>
        <TextInput
          style={styles.textinput}
          placeholderTextColor="white"
          placeholder="Title"
          onChangeText={(text) => {
            this.setState({
              title: text,
            });
          }}
        />
        <Text style={styles.text}>Time</Text>
        <TextInput
          style={styles.textinput}
          placeholderTextColor="white"
          placeholder="Time"
          onChangeText={(text) => {
            this.setState({
              time: text,
            });
          }}
        />
        <Text style={styles.text}>Location</Text>
        <TextInput
          style={styles.textinput}
          placeholderTextColor="white"
          placeholder="Location"
          onChangeText={(text) => {
            this.setState({
              location: text,
            });
          }}
        />
        <Text style={styles.text}>Notes</Text>
        <TextInput
          style={styles.textinput}
          placeholderTextColor="white"
          placeholder="Notes"
          onChangeText={(text) => {
            this.setState({
              notes: text,
            });
          }}
        />
        <TouchableOpacity
          onPress={() => {
            if (
              this.state.location &&
              this.state.time &&
              this.state.notes &&
              this.state.title
            ) {
              this.addData();
            } else {
              alert("Please fill all the details!");
            }
          }}
          style={styles.login}
        >
          <Text style={styles.logintext}>Save Event</Text>
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
    marginTop: "10%",
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
    backgroundColor: "#444444",
    width: "81%",
    height: 40,
    borderRadius: 10,
    color: "white",
    marginTop: "3%",
    alignSelf: "center",
    paddingLeft: 10,
  },
  login: {
    alignSelf: "center",
    backgroundColor: "#60dfcd",
    width: "81%",
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
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
