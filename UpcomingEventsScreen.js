import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import firebase from "firebase";
import db from "./config";


export default class UpcomingEventsScreen extends React.Component {
  constructor() {
    super(); 
    this.state = {
      events: [], 
    };
  }
  getData = async () => {
    var response = await db.collection("ideas").where('email','==', firebase.auth().currentUser.email).get();
    response.docs.map((d) => {
      var tempArray = this.state.events;
      tempArray.push(d.data());
      this.setState({ events: tempArray });
    });
  };
  componentDidMount() {
    this.getData();
  }

  render() {
    if (this.state.events.length === 0) {
      return (
        <View style={{ flex: 1, backgroundColor: "black" }}>
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
              Upcoming Events
            </Text>
          </View>

          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 16,
              alignSelf: "center",
              textAlign: "center",
              marginTop:'50%'
            }}
          >
            All your events will appear here!
          </Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("AddEvents")}
            style={styles.login}
          >
            <Text style={styles.logintext}>Add Events</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
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
              Upcoming Events
            </Text>
          </View>
          <ScrollView>
            {this.state.events.map((a,i) => {
              return (
                <View
                key={i}
                  style={{
                    backgroundColor: "pink",
                    width: "90%",
                    alignSelf: "center",
                    borderRadius: 10,
                    marginTop: 20,
                  }}
                >
                  <LinearGradient
                    colors={["#1e9afe", "#60dfcd"]}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: 10,
                      justifyContent: "center",
                      padding: 15,
                      flex: 1,
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontSize: 16,
                        fontWeight: "bold",
                      }}
                    > 
                      {a.title}
                    </Text>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          marginTop: 5,
                        }}
                      >
                        <Ionicons name="time" size={20} color="white" />
                        <Text style={{ color: "white", marginLeft: 5 }}>
                          {a.time}
                        </Text>
                      </View>

                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          marginTop: 5,
                          marginLeft: 30,
                        }}
                      >
                        <Ionicons name="location" size={20} color="white" />
                        <Text style={{ color: "white", marginLeft: 5 }}>
                          {a.location}
                        </Text>
                      </View>
                    </View>

                    <Text style={{ color: "white", marginTop: 10 }}>
                      {a.notes}
                    </Text>
                  </LinearGradient>
                </View>
              );
            })}
          </ScrollView>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("AddEvents")}
            style={styles.login}
          >
            <Text style={styles.logintext}>Add Events</Text>
          </TouchableOpacity>
        </View>
      );
    }
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
    marginBottom: "2%",
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
    height: "6%",
    borderRadius: 10,

    marginTop: "3%",
    alignSelf: "center",
    padding: "3%",
  }, 
  login: {
    alignSelf: "center",
    backgroundColor: "#1e9afe",
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
    marginLeft: "30%",
    marginTop: "3%",
    fontFamily: "Arial",
    fontSize: 10,
  },
});
